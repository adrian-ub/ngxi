import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUnderlineText1Icon],svg[streamline-underline-text-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5h11M4 .5v8a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-8"></svg:path>`,
})
export class StreamlineUnderlineText1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
