import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextUnderlineIcon],svg[icon-park-outline-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 44h32"></svg:path><svg:path d="M37 6.097V22c0 7.18-5.82 13-13 13s-13-5.82-13-13V6.097"></svg:path></svg:g>`,
})
export class IconParkOutlineTextUnderlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
