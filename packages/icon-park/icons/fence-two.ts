import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFenceTwoIcon],svg[icon-park-fence-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4V44"></svg:path><svg:path d="M16 9L16 37"></svg:path><svg:path d="M24 9L24 37"></svg:path><svg:path d="M32 9L32 37"></svg:path><svg:path d="M42 44L6 44"></svg:path><svg:path d="M42 37L6 37"></svg:path><svg:path d="M39 4V44"></svg:path><svg:path d="M42 9L6 9"></svg:path></svg:g>`,
})
export class IconParkFenceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
