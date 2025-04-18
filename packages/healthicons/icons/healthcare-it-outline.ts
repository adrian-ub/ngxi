import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthcareItOutlineIcon],svg[healthicons-healthcare-it-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.5 20.5V17h2v3.5H28v2h-3.5V26h-2v-3.5H19v-2z"></svg:path><svg:path fill-rule="evenodd" d="M7.057 31.476A2 2 0 0 1 7 31V12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v19c0 .244-.044.477-.123.693l3.111 4.76A1 1 0 0 1 43.151 38H4.8a1 1 0 0 1-.849-1.528zM9 12h30v19H9z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHealthcareItOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
