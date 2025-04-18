import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTorchFIcon],svg[jam-torch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h8v1a2 2 0 0 1-1.35 1.892l-.508 7.113a2.148 2.148 0 0 1-4.284 0l-.509-7.113A2 2 0 0 1 0 11zm7.465-2H8H0h.535A4 4 0 0 1 0 6q0-2.21 4-6q4 3.79 4 6c0 .729-.195 1.412-.535 2"></svg:path>`,
})
export class JamTorchFIcon {
  readonly viewBox = input("-8 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
