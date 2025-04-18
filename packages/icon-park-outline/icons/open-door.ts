import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOpenDoorIcon],svg[icon-park-outline-open-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 4v40l22-6V10z"></svg:path><svg:path stroke-linecap="round" d="M6 10h14v28H6z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M28 22v4"></svg:path></svg:g>`,
})
export class IconParkOutlineOpenDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
