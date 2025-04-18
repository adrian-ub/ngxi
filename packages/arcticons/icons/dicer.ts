import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicerIcon],svg[arcticons-dicer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.82 10.5a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64m20.36 0a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64M24 20.68A3.32 3.32 0 0 1 27.32 24h0A3.32 3.32 0 0 1 24 27.32h0A3.32 3.32 0 0 1 20.68 24h0A3.32 3.32 0 0 1 24 20.68M13.82 30.86a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32m20.36 0a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsDicerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
