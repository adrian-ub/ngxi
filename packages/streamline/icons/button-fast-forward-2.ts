import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward2Icon],svg[streamline-button-fast-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62z"></svg:path><svg:path d="M6.997 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18l-5.08-3.32a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6zM13.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonFastForward2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
