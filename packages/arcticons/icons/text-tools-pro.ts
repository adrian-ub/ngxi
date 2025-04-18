import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTextToolsProIcon],svg[arcticons-text-tools-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.56 14.01h5.2m-2.6 8v-8m5.08 0h5.2m-2.6 8v-8m-16.9 19.9v-8h2.6a2.7 2.7 0 1 1 0 5.4h-2.6m10.92 2.6v-8h2.6a2.7 2.7 0 1 1 0 5.4h-2.6m2.81.08l2.6 2.6m7.09-.08a2.58 2.58 0 0 1-2.6-2.6v-2.7a2.67 2.67 0 0 1 2.6-2.7h0a2.69 2.69 0 0 1 2.7 2.68v2.62a2.69 2.69 0 0 1-2.68 2.7z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsTextToolsProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
