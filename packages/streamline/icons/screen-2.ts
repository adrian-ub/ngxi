import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen2Icon],svg[streamline-screen-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 1.5H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M3.53 13.5a3.51 3.51 0 0 1 6.94 0"></svg:path></svg:g>`,
})
export class StreamlineScreen2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
