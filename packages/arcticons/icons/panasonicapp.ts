import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanasonicappIcon],svg[arcticons-panasonicapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path d="M8.643 24.171h4.65v9.767h7.798a6.325 6.325 0 0 1-2.958-7.115c.74-2.768 3.246-4.693 5.867-4.693s5.128 1.925 5.867 4.693a6.325 6.325 0 0 1-2.957 7.115h7.797v-9.767h4.65L24 14.061z"></svg:path><svg:circle cx="24" cy="28.404" r="2.887"></svg:circle></svg:g>`,
})
export class ArcticonsPanasonicappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
