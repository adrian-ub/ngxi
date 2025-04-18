import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiShutter30Icon],svg[cbi-shutter-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 9.813h19v.475h-19Zm.23-5.809h18.54v5.477H2.73ZM2.5 2v1.692h19V2Zm3.722 1.347H3.067V2.271h3.155Zm-2.954-.875h2.753v.675H3.268z"></svg:path>`,
})
export class CbiShutter30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
