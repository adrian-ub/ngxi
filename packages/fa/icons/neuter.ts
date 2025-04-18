import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faNeuterIcon],svg[fa-neuter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 576q0 221-147.5 384.5T640 1148v612q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-612q-217-24-364.5-187.5T0 576q0-117 45.5-223.5t123-184t184-123T576 0t223.5 45.5t184 123t123 184T1152 576m-576 448q185 0 316.5-131.5T1024 576T892.5 259.5T576 128T259.5 259.5T128 576t131.5 316.5T576 1024"></svg:path>`,
})
export class FaNeuterIcon {
  readonly viewBox = input("0 0 1152 1792")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
