import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandsIcon],svg[icon-park-outline-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="13" r="9" stroke-linejoin="round"></svg:circle><svg:path d="M4.5 44c0-6 7-16 19.5-16c0 0 2.759 0 5.782 1.09C32.744 30.16 36.5 31.149 36.5 28V7.75a3.75 3.75 0 1 1 7.5 0V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 44h44"></svg:path></svg:g>`,
})
export class IconParkOutlineHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
