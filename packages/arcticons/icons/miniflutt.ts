import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinifluttIcon],svg[arcticons-miniflutt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M22.03 18.956h6.683m-3.279 10.088V18.956"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.681 25.009c0-1.387 1.135-2.522 2.522-2.522s2.522 1.135 2.522 2.522v4.035m-5.044-6.557v6.557m5.044-4.035c0-1.387 1.135-2.522 2.522-2.522s2.522 1.135 2.522 2.522v4.035m11.867-10.088h6.683m-3.278 10.088V18.956"></svg:path>`,
})
export class ArcticonsMinifluttIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
