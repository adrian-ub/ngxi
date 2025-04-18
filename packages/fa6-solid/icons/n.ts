import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidNIcon],svg[fa6-solid-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1"></svg:path>`,
})
export class Fa6SolidNIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
