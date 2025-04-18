import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEditOutlineIcon],svg[lsicon-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13.5h12M3.775 8.217L9.992 2l2.122 2.121l-6.217 6.217l-2.567.556z"></svg:path>`,
})
export class LsiconEditOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
