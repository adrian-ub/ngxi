import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilShareSolidIcon],svg[basil-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5a3 3 0 0 0-2.902 3.765a.8.8 0 0 0-.207.077l-2.757 1.503L8.128 9.85a1 1 0 0 0-.1.068a3 3 0 1 0 .682 4.612l2.926 1.627l2.954 1.611q-.09.353-.09.733a3 3 0 1 0 .81-2.05l-2.948-1.607l-2.946-1.636a3 3 0 0 0-.308-2.19l3.258-1.862l2.743-1.497a.8.8 0 0 0 .177-.133A3 3 0 1 0 17.5 2.5"></svg:path>`,
})
export class BasilShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
