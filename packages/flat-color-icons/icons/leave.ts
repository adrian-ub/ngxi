import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeaveIcon],svg[flat-color-icons-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCDD2" d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#F44336" d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4"></svg:path><svg:g fill="#B71C1C"><svg:circle cx="33" cy="10" r="3"></svg:circle><svg:circle cx="15" cy="10" r="3"></svg:circle></svg:g><svg:path fill="#BDBDBD" d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2M15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path><svg:path fill="#F44336" d="M22.2 35.3c0-.2 0-.5.1-.7s.2-.4.4-.5s.3-.3.5-.3c.2-.1.5-.1.7-.1s.5 0 .7.1l.6.3c.2.1.3.3.4.5s.1.4.1.7c0 .2 0 .5-.1.7s-.2.4-.4.5s-.3.3-.6.3s-.3.2-.6.2s-.5 0-.7-.1s-.4-.2-.5-.3c-.2-.1-.3-.3-.4-.5c-.1-.3-.2-.5-.2-.8m3.1-4.3h-2.6l-.4-11h3.3z"></svg:path>`,
})
export class FlatColorIconsLeaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
