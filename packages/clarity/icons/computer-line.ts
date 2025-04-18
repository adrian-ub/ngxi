import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityComputerLineIcon],svg[clarity-computer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.6 22.88V10.6h14.8L25.98 9H8v13.88z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M6 7h24v16h2V6.5A1.5 1.5 0 0 0 30.5 5h-25A1.5 1.5 0 0 0 4 6.5V23h2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M1 25v3.4A2.6 2.6 0 0 0 3.6 31h28.74a2.6 2.6 0 0 0 2.6-2.6V25Zm32 3.4a.6.6 0 0 1-.6.6H3.56a.6.6 0 0 1-.6-.6v-1.87h9.95a1.64 1.64 0 0 0 1.5 1h7.13a1.64 1.64 0 0 0 1.5-1H33Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityComputerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
