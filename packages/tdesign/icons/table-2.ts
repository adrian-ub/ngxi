import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTable2Icon],svg[tdesign-table-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 3.5h21v17h-21zm2 2v3H11v-3zm9.5 0v3h7.5v-3zm7.5 5H13v3h7.5zm0 5H13v3h7.5zm-9.5 3v-3H3.5v3zm-7.5-5H11v-3H3.5z"></svg:path>`,
})
export class TdesignTable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
