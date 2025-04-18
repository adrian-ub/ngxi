import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolFlagSolidIcon],svg[flowbite-school-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4v13H8V7.869l-1.445.963a1 1 0 0 1-1.11-1.664l6-4a1 1 0 0 1 1.11 0L15 4.798zm-5 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path d="M18 9h-.016h.03zM6 10.524l-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2zm14.27.638L18 10.524V21h2a1 1 0 0 0 1-1v-7.875a1 1 0 0 0-.73-.963"></svg:path></svg:g>`,
})
export class FlowbiteSchoolFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
