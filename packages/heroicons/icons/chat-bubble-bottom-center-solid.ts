import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChatBubbleBottomCenterSolidIcon],svg[heroicons-chat-bubble-bottom-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.848 2.771A49 49 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52c1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a49 49 0 0 1-3.476.383a.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.132a.39.39 0 0 0-.297-.17a49 49 0 0 1-3.476-.385c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsChatBubbleBottomCenterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
