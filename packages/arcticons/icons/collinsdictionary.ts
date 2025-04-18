import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCollinsdictionaryIcon],svg[arcticons-collinsdictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 19.844h3.099v8.265H9.5zm23.525 8.265v-8.265h1.86A3.616 3.616 0 0 1 38.5 23.46v1.033a3.616 3.616 0 0 1-3.616 3.616zm-11.263-2.772v.034a2.74 2.74 0 0 1-2.737 2.738h0a2.74 2.74 0 0 1-2.738-2.738v-2.79a2.74 2.74 0 0 1 2.738-2.737h0a2.74 2.74 0 0 1 2.737 2.737v.034m2.788 2.804a2.738 2.738 0 1 0 5.476 0v-2.79a2.738 2.738 0 1 0-5.475 0z"></svg:path>`,
})
export class ArcticonsCollinsdictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
