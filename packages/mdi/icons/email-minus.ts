import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMinusIcon],svg[mdi-email-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm19 10v2h-8v-2z"></svg:path>`,
})
export class MdiEmailMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
