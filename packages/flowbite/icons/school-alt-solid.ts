import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolAltSolidIcon],svg[flowbite-school-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M6.651 11.63L12 5.048l5.349 6.584a1 1 0 0 0 .776.369H21v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37M9 13a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path><svg:path d="m2.5 10l2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4zm12.851-4l3.25 4H21.5l-2.7-3.6A1 1 0 0 0 18 6z"></svg:path></svg:g>`,
})
export class FlowbiteSchoolAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
