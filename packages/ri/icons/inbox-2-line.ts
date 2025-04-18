import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInbox2LineIcon],svg[ri-inbox-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.024 3.783A1 1 0 0 1 5 3h14a1 1 0 0 1 .976.783l2 9Q22 12.89 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 .024-.217zM5.802 5l-1.555 7H9a3 3 0 1 0 6 0h4.753l-1.555-7zm10.782 9a5.001 5.001 0 0 1-9.168 0H4v5h16v-5z"></svg:path>`,
})
export class RiInbox2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
