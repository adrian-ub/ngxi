import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagsOutlineIcon],svg[ion-ios-pricetags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 64V32H288L32 320l160 160 23.471-23.904L240 480l240-272V64h-32zM192 457.371L54.39 320 294.621 48H432v137.377l-216.555 247.99-11.34 11.363L192 457.371zm272-255.994L240 457.371l-13.182-12.65L448 192V80h16v121.377z" fill="currentColor"></svg:path><svg:path d="M352 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
