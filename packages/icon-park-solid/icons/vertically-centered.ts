import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVerticallyCenteredIcon],svg[icon-park-solid-vertically-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7h36"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M16 16h16v16H16z"></svg:path><svg:path d="M6 41h36"></svg:path></svg:g>`,
})
export class IconParkSolidVerticallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
