import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons4NegativeIcon],svg[healthicons-4-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthicons4Negative0)"><svg:path d="M26 18.606V28h-6.263z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM30 12a2 2 0 0 0-3.664-1.11l-12 18A2 2 0 0 0 16 32h10v4a2 2 0 0 0 4 0v-4h2a2 2 0 1 0 0-4h-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons4Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons4NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
