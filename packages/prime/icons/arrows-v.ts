import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowsVIcon],svg[prime-arrows-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.29 20.69a.8.8 0 0 0 .24-.16l4-4a.75.75 0 0 0-1.06-1.06l-2.72 2.72V5.81l2.72 2.72a.75.75 0 0 0 1.06-1.06l-4-4a.8.8 0 0 0-.24-.16a.73.73 0 0 0-.58 0a.8.8 0 0 0-.24.16l-4 4a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0l2.72-2.72v12.38l-2.72-2.72a.75.75 0 0 0-1.06 0a.75.75 0 0 0 0 1.06l4 4a.8.8 0 0 0 .24.16a.73.73 0 0 0 .58 0"></svg:path>`,
})
export class PrimeArrowsVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
