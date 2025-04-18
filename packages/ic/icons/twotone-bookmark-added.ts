import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBookmarkAddedIcon],svg[ic-twotone-bookmark-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17.83 9L15 6.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41zM17 17.97l-5-2.14l-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3l7 3V10.9c-.32.07-.66.1-1 .1s-.68-.03-1-.1z"></svg:path>`,
})
export class IcTwotoneBookmarkAddedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
