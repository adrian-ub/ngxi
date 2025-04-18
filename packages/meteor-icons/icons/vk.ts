import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVkIcon],svg[meteor-icons-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="22" x="1" y="1" rx="5"></svg:rect><svg:path d="M7 8.5a7 8 0 0 0 5 7v-7m5 0Q16 11 13 12q3 1 4 3.5M12 12h1"></svg:path></svg:g>`,
})
export class MeteorIconsVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
