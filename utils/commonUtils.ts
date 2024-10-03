/**
 * @param value : `string`
 * @returns : `"*** " + value + " ***"`
 */
export async function print(value: string): Promise<void> {
  let formattedValue = "\n*** " + value + " ***\n";
  return console.log(formattedValue);
}