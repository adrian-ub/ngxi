import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFriendsofhueIcon],svg[cbi-friendsofhue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m1 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 2h5v16h-5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m12 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5V8z"></svg:path>`,
})
export class CbiFriendsofhueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
