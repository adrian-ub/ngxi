import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind2Icon],svg[streamline-button-rewind-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62z"></svg:path><svg:path d="M7.003 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.823 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6zM.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonRewind2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
