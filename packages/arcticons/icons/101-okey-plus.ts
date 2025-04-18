import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons101OkeyPlusIcon],svg[arcticons-101-okey-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 16.648h3.676v14.704m15.648-14.704H35.5v14.704"></svg:path><svg:rect width="9.741" height="14.704" x="20.113" y="16.648" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.87" ry="4.87"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.984 26.242v-4.484M22.742 24h4.483M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class Arcticons101OkeyPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
