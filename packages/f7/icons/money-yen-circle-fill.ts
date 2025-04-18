import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyYenCircleFillIcon],svg[f7-money-yen-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m9.831-35.143h-3.864l-5.71 10.21h-.095l-5.71-10.21h-3.88l6.965 11.817h-4.5v1.797h5.423V33h-5.423v1.797h5.423v4.564h3.467v-4.564h5.423V33h-5.423v-2.53h5.423v-1.797h-4.5z"></svg:path>`,
})
export class F7MoneyYenCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
