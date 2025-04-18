import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSadAlt2Icon],svg[lets-icons-sad-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsSadAlt20" width="4" height="3" x="7" y="9" fill="#000" maskUnits="userSpaceOnUse"><svg:path fill="#fff" d="M7 9h4v3H7z"></svg:path><svg:path d="M9.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10z"></svg:path></svg:mask><svg:mask id="letsIconsSadAlt21" width="4" height="3" x="13" y="9" fill="#000" maskUnits="userSpaceOnUse"><svg:path fill="#fff" d="M13 9h4v3h-4z"></svg:path><svg:path d="M15.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C14.14 10 14.26 10 14.5 10z"></svg:path></svg:mask><svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.324 16.273c.418-.09.976-.158 1.604-.203c.635-.046 1.35-.07 2.072-.07c.723 0 1.437.024 2.072.07c.628.045 1.186.112 1.604.203"></svg:path><svg:path fill="currentColor" d="M9.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10z" mask="url(#letsIconsSadAlt20)"></svg:path><svg:path fill="currentColor" d="M15.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C14.14 10 14.26 10 14.5 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M15.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C14.14 10 14.26 10 14.5 10z" mask="url(#letsIconsSadAlt21)"></svg:path></svg:g>`,
})
export class LetsIconsSadAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
