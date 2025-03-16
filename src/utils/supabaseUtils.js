import supabase from "../supabaseClient";

export const fetchRowCount = async (tableName) => {
    const { count, error } = await supabase
        .from(tableName)
        .select("*", { count: "exact", head: true });

    if (error) {
        console.error(`Error fetching count from ${tableName}:`, error.message);
        return 0; // Return 0 if there's an error
    }
    return count || 0;
};
