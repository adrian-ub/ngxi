import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinkFilledIcon],svg[lsicon-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.249 3.028a2.627 2.627 0 1 1 3.715 3.715L11.048 8.66l-.707-.707l1.916-1.916a1.627 1.627 0 0 0-2.3-2.3L7.853 5.836l-.707-.707zm1.097 3.333L6.35 10.357l-.708-.708L9.64 5.654zM5.688 8.004L3.772 9.92a1.627 1.627 0 0 0 2.3 2.3l1.916-1.915l.707.707l-1.916 1.916a2.627 2.627 0 0 1-3.715-3.715L4.98 7.297z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
