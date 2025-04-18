import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons21bitIcon],svg[arcticons-21bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.596 18.815l3.904-1.939l-2.512 14.248M16.18 21.596c.514-2.913 3.557-5.21 6.473-4.63c1.912.38 3.19 2.092 3.034 4.098c-.116 1.492-.848 2.964-2.038 3.869c-2.205 1.676-9.149 6.191-9.149 6.191h9.44"></svg:path>`,
})
export class Arcticons21bitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
