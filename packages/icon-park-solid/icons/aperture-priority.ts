import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAperturePriorityIcon],svg[icon-park-solid-aperture-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAperturePriority0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="m15 12l3-6h12l3 6z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M41 12H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" d="m17 34l7-14l7 14m-12-3.962h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAperturePriority0)"></svg:path>`,
})
export class IconParkSolidAperturePriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
