import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSearchFilledIcon],svg[lsicon-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M1 6.5a5.5 5.5 0 1 1 9.727 3.52l3.127 3.126l-.708.708l-3.126-3.127A5.5 5.5 0 0 1 1 6.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
