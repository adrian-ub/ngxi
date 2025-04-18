import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBell02Icon],svg[hugeicons-school-bell-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.532 10.781l-.082.12a4.21 4.21 0 0 1-3.475 1.833H3.88c-.782 0-1.174.946-.621 1.499l6.508 6.508c.553.553 1.5.161 1.5-.621v-.095c0-1.39.685-2.69 1.833-3.476l.119-.081a4.091 4.091 0 1 0-5.687-5.687M19 17a4.9 4.9 0 0 1-1.427 2.657A5.2 5.2 0 0 1 15 21M7 5a5.2 5.2 0 0 0-2.596 1.404A5.2 5.2 0 0 0 3 9m10-.198l3.89-4.926a2.303 2.303 0 1 1 3.234 3.235L15.198 11M8 19.314A2.343 2.343 0 1 1 4.686 16" color="currentColor"></svg:path>`,
})
export class HugeiconsSchoolBell02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
