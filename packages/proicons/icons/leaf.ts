import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLeafIcon],svg[proicons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.508 16.223a6.38 6.38 0 0 1-9.016 0a6.367 6.367 0 0 1 0-9.009l3.094-3.091a2 2 0 0 1 2.828 0l3.094 3.091a6.367 6.367 0 0 1 0 9.01M12 12.265v9.025"></svg:path>`,
})
export class ProiconsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
