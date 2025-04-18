import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBoltIcon],svg[proicons-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M19.896 11.457c.64 0 .924.804.426 1.206l-10.45 8.434c-.505.407-1.238-.057-1.086-.687l1.615-6.696H4.104a.678.678 0 0 1-.455-1.182l10.63-9.604c.489-.442 1.257.002 1.118.646l-1.698 7.883z"></svg:path>`,
})
export class ProiconsBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
