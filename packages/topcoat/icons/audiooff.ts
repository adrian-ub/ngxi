import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatAudiooffIcon],svg[topcoat-audiooff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 29.479h8l9 11.015c1 1.44 3.34 1.331 4-.302V2.83c-.811-1.632-2.939-1.763-4-.382l-9 11.053h-8c-2.561 0-3 .461-3 2.964v10.012c0 2.442.5 3.002 3 3.002"></svg:path>`,
})
export class TopcoatAudiooffIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
