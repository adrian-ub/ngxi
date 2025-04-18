import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBrightButtonIcon],svg[openmoji-bright-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="15" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="15"></svg:circle><svg:path d="M36 15V8m14.849 13.151l4.95-4.95M57 36h7M50.849 50.849l4.95 4.95M36 57v7M21.151 50.849l-4.95 4.95M15 36H8m13.151-14.849l-4.95-4.95"></svg:path></svg:g>`,
})
export class OpenmojiBrightButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
