import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCherriesSolidIcon],svg[streamline-cherries-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.642 1.546A14 14 0 0 0 2.785 7.85a3.082 3.082 0 1 0 1.498.074a12.5 12.5 0 0 1 1.322-5.006a10.7 10.7 0 0 0 2.758 4.818a3.081 3.081 0 1 0 1.3-.828a9.2 9.2 0 0 1-2.812-5.363H8.48a.75.75 0 1 0 0-1.5H3.482a.75.75 0 1 0 0 1.5h1.16Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCherriesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
