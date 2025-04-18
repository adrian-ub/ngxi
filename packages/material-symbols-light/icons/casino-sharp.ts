import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCasinoSharpIcon],svg[material-symbols-light-casino-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.077 16.846q.385 0 .654-.269T9 15.923t-.27-.654T8.078 15t-.654.27t-.27.653t.27.654t.654.27m0-7.847q.385 0 .654-.27T9 8.078t-.27-.654t-.653-.27t-.654.27t-.27.654t.27.654t.654.269M12 12.923q.385 0 .654-.27t.269-.653t-.27-.654t-.653-.269t-.654.27t-.269.653t.27.654t.653.269m3.923 3.923q.385 0 .654-.269t.27-.654t-.27-.654t-.654-.269t-.654.27t-.269.653t.27.654t.653.27m0-7.847q.385 0 .654-.27t.27-.653t-.27-.654t-.654-.27t-.654.27t-.269.654t.27.654t.653.269M4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightCasinoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
