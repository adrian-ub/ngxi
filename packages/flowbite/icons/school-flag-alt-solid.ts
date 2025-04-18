import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolFlagAltSolidIcon],svg[flowbite-school-flag-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M17 4a1 1 0 0 0-1 1v4.97l-4-4.923l-5.349 6.584a1 1 0 0 1-.776.369H3v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7h-2.875a1 1 0 0 1-.125-.008V9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-8 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path><svg:path d="M5.2 6.4L2.5 10h2.899l3.25-4H6a1 1 0 0 0-.8.4"></svg:path></svg:g>`,
})
export class FlowbiteSchoolFlagAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
