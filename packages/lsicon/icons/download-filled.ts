import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDownloadFilledIcon],svg[lsicon-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.481 9.143L7.5 1.999L8.5 2l-.019 7.137l2.43-2.43l.706.708L8.332 10.7a.5.5 0 0 1-.707 0L4.34 7.416l.707-.707zm-4.48 3.882V9.53h-1v3.996a.5.5 0 0 0 .5.5h11.05a.5.5 0 0 0 .5-.5V9.53h-1v3.496z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDownloadFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
