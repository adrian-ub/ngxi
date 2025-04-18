import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCherriesIcon],svg[streamline-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.36 13.5a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2m7.28-1.04a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2"></svg:path><svg:path d="M9.41 7.57A10.36 10.36 0 0 1 6 .5a13.8 13.8 0 0 0-2.6 7.8M3.36.5h5.2"></svg:path></svg:g>`,
})
export class StreamlineCherriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
