import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelInboxIcon],svg[raphael-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5H8L4 19v8h24v-8zm3 21H5v-7h8.75a2.25 2.25 0 0 0 4.5 0H27z"></svg:path>`,
})
export class RaphaelInboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
