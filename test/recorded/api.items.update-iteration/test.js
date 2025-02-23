// @ts-check

/**
 * @param {import("../../../").default} project
 * @param {string} [itemId]
 */
export function test(project, itemId = "PVTI_1") {
  return project.items.update(itemId, { iteration: "Iteration 2" });
}
