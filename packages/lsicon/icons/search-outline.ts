import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSearchOutlineIcon],svg[lsicon-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m10 10l3.5 3.5m-2-7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path>`,
})
export class LsiconSearchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
