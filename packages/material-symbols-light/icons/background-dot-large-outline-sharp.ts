import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackgroundDotLargeOutlineSharpIcon],svg[material-symbols-light-background-dot-large-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.077 15.846q.385 0 .654-.269t.269-.654t-.27-.654T9.078 14t-.654.27t-.27.653t.27.654t.654.27m0-5.847q.385 0 .654-.27T10 9.078t-.27-.654t-.653-.27t-.654.27t-.27.654t.27.654t.654.269m5.846 5.846q.385 0 .654-.269t.27-.654t-.27-.654t-.654-.269t-.654.27t-.269.653t.27.654t.653.27m0-5.847q.385 0 .654-.27t.27-.653t-.27-.654t-.654-.27t-.654.27t-.269.654t.27.654t.653.269M4 20V4h16v16zm1-1h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightBackgroundDotLargeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
