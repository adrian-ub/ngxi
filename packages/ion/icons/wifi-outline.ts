import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionWifiOutlineIcon],svg[ion-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:path d="M318.586 363.5L256 424l-62.586-60.5S212 336 256 336s62.586 27.5 62.586 27.5M407.31 278L372 312s-41-46-116-46s-116 46-116 46l-35.31-34S142.5 214 256 214s151.31 64 151.31 64"></svg:path><svg:path d="m496 192l-36.69 35.5S386.5 141 256 141S52.69 227.5 52.69 227.5L16 192S88 88 256 88s240 104 240 104"></svg:path></svg:g>`,
})
export class IonWifiOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
