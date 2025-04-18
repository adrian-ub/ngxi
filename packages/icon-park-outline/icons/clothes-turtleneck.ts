import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesTurtleneckIcon],svg[icon-park-outline-clothes-turtleneck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 23v14m-26 0v7h26v-7m-26 0H4V23c0-3 2-6.5 5-9s9-4 9-4h12s6 1.5 9 4s5 6 5 9v14h-7m-26 0V23m19-13H18V4h12z"></svg:path>`,
})
export class IconParkOutlineClothesTurtleneckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
