import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMixerVerticalIcon],svg[radix-icons-mixer-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.5a.5.5 0 0 0-1 0V7l.002.05a2.5 2.5 0 0 0 0 4.9L4 12v1.5a.5.5 0 0 0 1 0V12l-.002-.05a2.5 2.5 0 0 0 0-4.9L5 7zm6 0a.5.5 0 0 0-1 0V3l.002.05a2.5 2.5 0 0 0 0 4.9L10 8v5.5a.5.5 0 0 0 1 0V8l-.002-.05a2.5 2.5 0 0 0 0-4.9L11 3zM4.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMixerVerticalIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
