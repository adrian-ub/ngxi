import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTableOutlineIcon],svg[lsicon-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 5h12M2 8h12M2 11h12M6 5v9m4-9v9M3 2.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class LsiconTableOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
