import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSadAltIcon],svg[lets-icons-sad-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsSadAlt0" width="4" height="3" x="7" y="8" fill="#000" maskUnits="userSpaceOnUse"><svg:path fill="#fff" d="M7 8h4v3H7z"></svg:path><svg:path d="M9.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S8.26 9 8.5 9z"></svg:path></svg:mask><svg:mask id="letsIconsSadAlt1" width="4" height="3" x="13" y="8" fill="#000" maskUnits="userSpaceOnUse"><svg:path fill="#fff" d="M13 8h4v3h-4z"></svg:path><svg:path d="M15.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S14.26 9 14.5 9z"></svg:path></svg:mask><svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.3 8.3 0 0 1 12 15c.786 0 1.57.103 2.277.307c.7.202 1.35.51 1.842.937"></svg:path><svg:path fill="currentColor" d="M9.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S8.26 9 8.5 9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S8.26 9 8.5 9z" mask="url(#letsIconsSadAlt0)"></svg:path><svg:path fill="currentColor" d="M15.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S14.26 9 14.5 9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M15.5 9c.24 0 .36 0 .433.122c.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357S14.26 9 14.5 9z" mask="url(#letsIconsSadAlt1)"></svg:path></svg:g>`,
})
export class LetsIconsSadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
