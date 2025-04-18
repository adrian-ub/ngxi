import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIUtensilsIcon],svg[healthicons-i-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M28 4h-9v40h9v-4h-4v-2h4v-3h-2v-2h2v-3h-2v-2h2v-3h-4v-2h4v-3h-2v-2h2v-3h-2v-2h2v-3h-4V8h4zm5 24a2 2 0 0 0-2 2v5h7v-5a2 2 0 0 0-2-2zm5 9h-7v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2z"></svg:path><svg:path d="M33 30v3h3v-3zm5 0a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5h7zm-7 7h7v5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 2h-3v3h3zM13 11a3 3 0 0 0-3 3v3h6v-3a3 3 0 0 0-3-3m3 8h-6v21l3 4l3-4z"></svg:path></svg:g>`,
})
export class HealthiconsIUtensilsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
