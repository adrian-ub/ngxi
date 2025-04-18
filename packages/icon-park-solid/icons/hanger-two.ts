import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHangerTwoIcon],svg[icon-park-solid-hanger-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 32h3.91a3.09 3.09 0 0 0 1.382-5.854L24 17L5.708 26.146A3.09 3.09 0 0 0 7.09 32H11"></svg:path><svg:path fill="currentColor" d="M11 30h26v14H11z"></svg:path><svg:path d="M24 17s4-6.79 4-9a4 4 0 0 0-8 0"></svg:path></svg:g>`,
})
export class IconParkSolidHangerTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
