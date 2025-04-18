import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFenceOneIcon],svg[icon-park-fence-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4V44"></svg:path><svg:path d="M44 12L4 12"></svg:path><svg:path d="M40 44L8 12"></svg:path><svg:path d="M8 44L40 12"></svg:path><svg:path d="M27 44L8 25"></svg:path><svg:path d="M40 31L21 12"></svg:path><svg:path d="M8 31L26 12"></svg:path><svg:path d="M21 44L40 25"></svg:path><svg:path d="M44 44L4 44"></svg:path><svg:path d="M40 4V44"></svg:path></svg:g>`,
})
export class IconParkFenceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
