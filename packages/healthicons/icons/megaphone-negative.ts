import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMegaphoneNegativeIcon],svg[healthicons-megaphone-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMegaphoneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM12 38v-7h4v7a2 2 0 1 1-4 0M7 26v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3m27-4v1a3 3 0 0 1-3 3v-7a3 3 0 0 1 3 3m-16 8V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844zm22.555-11.168a1 1 0 0 0-1.11-1.664l-3 2a1 1 0 0 0 1.11 1.664zM37 23a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm.555 4.168a1 1 0 0 0-1.11 1.664l3 2a1 1 0 0 0 1.11-1.664z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMegaphoneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMegaphoneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
