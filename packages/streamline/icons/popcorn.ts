import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePopcornIcon],svg[streamline-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2.56 6l.83 6.62a1 1 0 0 0 1 .88h5.23a1 1 0 0 0 1-.88L11.44 6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.64 3.12a1.5 1.5 0 0 1 .36-.05l-.04-.01a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1-1.06-.43a1.5 1.5 0 0 1 1.44-2.51a1.8 1.8 0 0 1-.14-.69A2 2 0 0 1 6.267.787A2 2 0 0 1 7 1.56A2 2 0 0 1 8.76.5a2 2 0 0 1 2.02 1.93a1.8 1.8 0 0 1-.14.69"></svg:path><svg:path d="M7 6v7.5"></svg:path></svg:g>`,
})
export class StreamlinePopcornIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
