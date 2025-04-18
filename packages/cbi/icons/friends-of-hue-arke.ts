import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFriendsOfHueArkeIcon],svg[cbi-friends-of-hue-arke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.7.7v22.5h22.5V.7zm21.6 21.6H1.7V1.7h20.5v20.6zM7.2 7.4v9.3h9.7V7.4zm4.3 8.2H8.2V8.4h3.3zm4.3 0h-3.3V8.4h3.3z"></svg:path>`,
})
export class CbiFriendsOfHueArkeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
