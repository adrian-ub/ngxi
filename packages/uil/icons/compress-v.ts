import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCompressVIcon],svg[uil-compress-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.71 13.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8V21a1 1 0 0 0 2 0v-4.59l.79.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Zm-1.42-2.58a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 1 0-1.42-1.42l-.79.8V3a1 1 0 0 0-2 0v4.59l-.79-.8a1 1 0 1 0-1.42 1.42Z"></svg:path>`,
})
export class UilCompressVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
