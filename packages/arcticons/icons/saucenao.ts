import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSaucenaoIcon],svg[arcticons-saucenao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.74V9.5c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4v1.24m0 26.52v1.24c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-1.24m4 1.24l29-29m-29 0l29 29"></svg:path>`,
})
export class ArcticonsSaucenaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
