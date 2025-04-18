import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconBeakerIcon],svg[codicon-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.893 13.558L10 6.006v-4h1v-1H9.994V1l-.456.005H5V2h1v3.952l-3.894 7.609A1 1 0 0 0 3 15.006h10a1 1 0 0 0 .893-1.448m-7-7.15L7 6.193V2.036l2-.024v4.237l.11.215l1.827 3.542H5.049zM3 14.017l1.54-3.011h6.916l1.547 3z"></svg:path>`,
})
export class CodiconBeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
