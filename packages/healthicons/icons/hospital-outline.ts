import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalOutlineIcon],svg[healthicons-hospital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 20h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm2-10h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4zm10-10h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm-7-15v-3h3v-2h-3V7h-2v3h-3v2h3v3z"></svg:path><svg:path fill-rule="evenodd" d="M17 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h8v2h-2v34h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V8h-1V6zm0 5h-4v31h4v-4h-1v-2h16v2h-1v4h4V11h-4v5a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2zm0-2h-4V8h4zm2-3h10v10H19zm4 36h-4v-4h4zm6 0v-4h-4v4zm6-33V8h-4v1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHospitalOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
