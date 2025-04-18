import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCatimaIcon],svg[arcticons-catima-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.6 12.7v18.7H9c-6-.8-6-18.1 0-18.7Zm-29.4 0l2-4.6l10.4 4.6h1.1l10.6-4.6l2.1 4.6Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.6 20.7l3.9 1.2l-5.2 18L9 31.4m4.6-11.1l2.8-2.6l2.8 2.6m7.1 0l2.8-2.6l2.8 2.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.1 25.1c.6 2.3 3.6 1.5 3.6-.9c0 2.4 2.9 3.2 3.5.9"></svg:path>`,
})
export class ArcticonsCatimaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
