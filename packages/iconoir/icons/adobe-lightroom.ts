import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeLightroomIcon],svg[iconoir-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"></svg:path><svg:path d="M7 8v8h4m3-5.5V13m0 3v-3m0 0s0-2.5 3-2.5"></svg:path></svg:g>`,
})
export class IconoirAdobeLightroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
