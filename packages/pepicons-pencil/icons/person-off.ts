import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonOffIcon],svg[pepicons-pencil-person-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="9.5" cy="5.5" r="3" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path><svg:path fill="currentColor" d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
