import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackgroundDotSmallSharpIcon],svg[material-symbols-light-background-dot-small-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.077 16.846q.385 0 .654-.269T9 15.923t-.27-.654T8.078 15t-.654.27t-.27.653t.27.654t.654.27m0-7.847q.385 0 .654-.27T9 8.078t-.27-.654t-.653-.27t-.654.27t-.27.654t.27.654t.654.269m0 3.923q.385 0 .654-.27T9 12t-.27-.654t-.653-.269t-.654.27t-.27.653t.27.654t.654.269m7.846 3.923q.385 0 .654-.269t.27-.654t-.27-.654t-.654-.269t-.654.27t-.269.653t.27.654t.653.27m0-7.847q.385 0 .654-.27t.27-.653t-.27-.654t-.654-.27t-.654.27t-.269.654t.27.654t.653.269m0 3.923q.385 0 .654-.27t.27-.653t-.27-.654t-.654-.269t-.654.27T15 12t.27.654t.653.269M12 9q.385 0 .654-.27t.269-.653t-.27-.654t-.653-.27t-.654.27t-.269.654t.27.654T12 9m0 7.846q.385 0 .654-.269t.269-.654t-.27-.654T12 15t-.654.27t-.269.653t.27.654t.653.27m0-3.924q.385 0 .654-.27t.269-.653t-.27-.654t-.653-.269t-.654.27t-.269.653t.27.654t.653.269M4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightBackgroundDotSmallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
