import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextIcon],svg[proicons-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.25 8.389l-.62-1.235A3 3 0 0 0 15.95 5.5h-7.9a3 3 0 0 0-2.68 1.654L4.75 8.39M12 5.5v13m0 0h-1.45m1.45 0h1.45"></svg:path>`,
})
export class ProiconsTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
