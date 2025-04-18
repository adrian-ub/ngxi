import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiButterIcon],svg[openmoji-butter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M19 33a3.416 3.416 0 0 0-3.314 2.984l-1.372 13.032A2.65 2.65 0 0 0 17 52h38a2.65 2.65 0 0 0 2.686-2.983l-1.372-13.034A3.416 3.416 0 0 0 53 33Z"></svg:path><svg:path fill="#fff" d="M12.251 52h47.938L58 56H13.616z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 33a3.416 3.416 0 0 0-3.314 2.984l-1.372 13.032A2.65 2.65 0 0 0 17 52h38a2.65 2.65 0 0 0 2.686-2.983l-1.372-13.034A3.416 3.416 0 0 0 53 33Zm-7.62 19H36"></svg:path><svg:path d="M36 56H15a2.44 2.44 0 0 1-1.82-.583l-.239-.238l-3.934-8.009l-4.127-.019M60.62 52H36m0 4h21a2.44 2.44 0 0 0 1.82-.583l.239-.238l3.934-8.009l4.127-.019"></svg:path></svg:g>`,
})
export class OpenmojiButterIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
