import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNotificationAltIcon],svg[marketeq-notification-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38.542 16.667a5.208 5.208 0 1 0 0-10.417a5.208 5.208 0 0 0 0 10.417"></svg:path><svg:path stroke="#306CFE" d="M41.667 25v12.5a4.167 4.167 0 0 1-4.167 4.167h-25A4.167 4.167 0 0 1 8.333 37.5v-25A4.167 4.167 0 0 1 12.5 8.333H25"></svg:path></svg:g>`,
})
export class MarketeqNotificationAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
