import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStaffOnlyIcon],svg[guidance-staff-only-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M19.5 20.5v.5m0-.5A3.5 3.5 0 0 0 16 24m3.5-3.5v-11H19a3 3 0 0 0-3 3v3m0 0a3.5 3.5 0 0 0-3.5 3.5v1m3.5-4.5v-13h-.5a3 3 0 0 0-3 3V12V.5H12a3 3 0 0 0-3 3V12V2.5h-.5a3 3 0 0 0-3 3V24"></svg:path>`,
})
export class GuidanceStaffOnlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
