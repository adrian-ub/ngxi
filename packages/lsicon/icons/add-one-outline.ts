import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddOneOutlineIcon],svg[lsicon-add-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 8h10M8 3v10"></svg:path>`,
})
export class LsiconAddOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
