import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonIcon],svg[pepicons-pencil-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="9.5" cy="5.5" r="3"></svg:circle><svg:path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
