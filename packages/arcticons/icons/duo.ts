import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDuoIcon],svg[arcticons-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M24 5.5A18.5 18.5 0 1 0 42.5 24V8c0-1.8-.8-2.5-2.5-2.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 17.1h11.3a2.65 2.65 0 0 1 2.6 2.6v8.7a2.65 2.65 0 0 1-2.6 2.6H16.5a2.65 2.65 0 0 1-2.6-2.6v-8.7a2.65 2.65 0 0 1 2.6-2.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m30.4 24.9l4.6 4.7V18.4L30.4 23Z"></svg:path>`,
})
export class ArcticonsDuoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
