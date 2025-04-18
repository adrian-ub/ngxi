import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoofingRoundedIcon],svg[material-symbols-light-roofing-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19q-.671 0-1.143-.472t-.472-1.144v-2q0-.67.472-1.143q.472-.472 1.143-.472h2q.671 0 1.143.472t.472 1.143v2q0 .672-.472 1.144T13 19zm-8-7.061q-.177.115-.365.094q-.189-.021-.323-.198q-.135-.177-.111-.366t.195-.323l8.629-6.433q.217-.161.472-.232T12 4.409t.503.072t.472.232l3.371 2.51v-1.28q0-.395.274-.669T17.288 5t.669.274t.274.668V8.62l3.398 2.527q.171.135.192.323q.021.189-.113.365q-.135.177-.323.199q-.189.02-.366-.095l-8.653-6.413Q12.212 5.41 12 5.41t-.365.115z"></svg:path>`,
})
export class MaterialSymbolsLightRoofingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
