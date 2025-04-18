import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHl7v2Logo24pxIcon],svg[healthicons-hl7v2-logo-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.187 2h7.683c.21 0 .38.17.38.38v7.666a.38.38 0 0 1-.649.269l-1.486-1.483l-4.066 4.057a.38.38 0 0 1-.537 0l-4.15-4.142a.38.38 0 0 1 0-.537l4.065-4.056l-1.509-1.505A.38.38 0 0 1 8.187 2"></svg:path><svg:path d="M13.95 11.111a.38.38 0 0 1 .538 0l4.15 4.142a.38.38 0 0 1 0 .537l-4.065 4.057l1.509 1.504a.38.38 0 0 1-.269.649H8.13a.38.38 0 0 1-.38-.38v-7.666c0-.34.41-.507.649-.269l1.486 1.483z"></svg:path></svg:g>`,
})
export class HealthiconsHl7v2Logo24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
