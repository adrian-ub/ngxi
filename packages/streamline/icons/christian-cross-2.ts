import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross2Icon],svg[streamline-christian-cross-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-4-9h8"></svg:path>`,
})
export class StreamlineChristianCross2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
