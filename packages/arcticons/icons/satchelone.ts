import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSatcheloneIcon],svg[arcticons-satchelone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="6.793" height="9" x="11.415" y="19.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.396" ry="3.396"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.396 28.5v-5.604A3.396 3.396 0 0 0 24 19.5h0a3.396 3.396 0 0 0-3.396 3.396m0 5.604v-9m15.536 7.286a3.4 3.4 0 0 1-2.951 1.714h0a3.396 3.396 0 0 1-3.396-3.396v-2.208a3.396 3.396 0 0 1 3.396-3.396h0a3.396 3.396 0 0 1 3.396 3.396V24h-6.793"></svg:path>`,
})
export class ArcticonsSatcheloneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
