import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biTwitchIcon],svg[bi-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.857 0L1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429l-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"></svg:path><svg:path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"></svg:path></svg:g>`,
})
export class BiTwitchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
