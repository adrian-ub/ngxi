import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNoEntryIcon],svg[openmoji-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#ea5a47" d="M36 11c-13.807 0-25 11.193-25 25s11.193 25 25 25s25-11.193 25-25s-11.193-25-25-25"></svg:path><svg:path fill="#FFF" d="M55.52 39.43c.198-1.127.308-2.283.308-3.466a20 20 0 0 0-.302-3.43H16.474a20 20 0 0 0-.302 3.43c0 1.183.11 2.34.308 3.466z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36 11c-13.807 0-25 11.193-25 25s11.193 25 25 25s25-11.193 25-25s-11.193-25-25-25"></svg:path><svg:path d="M55.52 39.43c.198-1.127.308-2.283.308-3.466a20 20 0 0 0-.302-3.43H16.474a20 20 0 0 0-.302 3.43c0 1.183.11 2.34.308 3.466z"></svg:path></svg:g>`,
})
export class OpenmojiNoEntryIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
