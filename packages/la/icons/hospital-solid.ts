import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHospitalSolidIcon],svg[la-hospital-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v2h2v2h2V7h2V5h-2V3zM6 5v23h9v-3h2v3h9V5h-5v2h3v19h-5v-3h-6v3H8V7h3V5zm5 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaHospitalSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
