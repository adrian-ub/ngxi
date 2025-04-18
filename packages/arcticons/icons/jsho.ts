import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJshoIcon],svg[arcticons-jsho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 23.09v10.82c0 2.719 5.271 5.66 10.154 0m.388-17.846v10.82c0 2.719 5.271 5.66 10.154 0M16.284 22.73c1.734.763 2.802 1.914 2.802 1.914m-4.056-.268c1.735.763 2.803 1.914 2.803 1.914m14.403-15.433v8.822c0 4.182-4.744 4.14-4.744 1.373c0-3.413 5.763-1.706 10.008.374"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.236 14.727c1.893.29 4.702-.396 4.702-.396"></svg:path>`,
})
export class ArcticonsJshoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
