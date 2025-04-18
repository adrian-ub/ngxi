import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePencilSolidIcon],svg[streamline-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.715-.001a1.5 1.5 0 0 0-1.07.449L1.407 8.645a.5.5 0 0 0-.128.22l-1.26 4.5a.5.5 0 0 0 .616.616l4.5-1.26a.5.5 0 0 0 .22-.128l8.197-8.238l.002-.001a1.5 1.5 0 0 0 0-2.128l-.002-.001L11.786.449a1.5 1.5 0 0 0-1.071-.45"></svg:path>`,
})
export class StreamlinePencilSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
