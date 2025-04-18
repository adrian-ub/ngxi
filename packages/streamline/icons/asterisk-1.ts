import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAsterisk1Icon],svg[streamline-asterisk-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-5.5-10l11 7m-11 0l11-7"></svg:path>`,
})
export class StreamlineAsterisk1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
