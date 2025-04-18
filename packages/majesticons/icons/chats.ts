import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatsIcon],svg[majesticons-chats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.584 7a5.001 5.001 0 1 0-8.809 4.675L4 14l2.325-.775q.322.204.675.359"></svg:path><svg:path fill="currentColor" d="M15 20a5 5 0 1 1 4.225-2.325L20 20l-2.325-.775A5 5 0 0 1 15 20"></svg:path></svg:g>`,
})
export class MajesticonsChatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
