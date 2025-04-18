import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuit24pxIcon],svg[healthicons-ppe-suit-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 5a3 3 0 0 1 6 0v2h.21a2 2 0 0 1 1.988 1.78l.627 5.647A1.417 1.417 0 0 1 16 15.937V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5h-2v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5.062a1.417 1.417 0 0 1-1.825-1.511l.627-5.648A2 2 0 0 1 8.79 7H9zm5-1h-4v.5A1.5 1.5 0 0 0 11.5 6h1A1.5 1.5 0 0 0 14 4.5zm-2.5 8V9h1v3H15v1H9v-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeSuit24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
