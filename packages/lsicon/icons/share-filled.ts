import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShareFilledIcon],svg[lsicon-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.592 2.446a.5.5 0 0 1 .707 0l1.875 1.875l-.707.707l-.967-.966V8.5h-1V3.952L6.424 5.028l-.707-.707zM3 6.5a.5.5 0 0 1 .5-.5h1.636v1H4v6h8V7h-1.136V6H12.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
