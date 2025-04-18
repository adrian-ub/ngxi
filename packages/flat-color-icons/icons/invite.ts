import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsInviteIcon],svg[flat-color-icons-invite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#fff" d="M12 11h24v22H12z"></svg:path><svg:path fill="#CFD8DC" d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4"></svg:path><svg:g fill="#4CAF50"><svg:path d="M22 14h4v12h-4z"></svg:path><svg:path d="M18 18h12v4H18z"></svg:path></svg:g>`,
})
export class FlatColorIconsInviteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
