import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnFilledIcon],svg[lsicon-column-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h1V3h4v10h1V7h4v6h1v1H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconColumnFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
