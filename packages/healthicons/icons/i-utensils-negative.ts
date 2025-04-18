import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIUtensilsNegativeIcon],svg[healthicons-i-utensils-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsIUtensilsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM19 4h9v4h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v4h-9zm14 24a2 2 0 0 0-2 2v5h7v-5a2 2 0 0 0-2-2zm5 9h-7v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2zM10 14a3 3 0 1 1 6 0v3h-6zm0 26V19h6v21l-3 4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIUtensilsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIUtensilsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
