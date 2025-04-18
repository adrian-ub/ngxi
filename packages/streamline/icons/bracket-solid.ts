import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBracketSolidIcon],svg[streamline-bracket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.476 2.893a1 1 0 1 0-1.46 1.367L11.578 7L9.015 9.74a1 1 0 1 0 1.46 1.367l3.204-3.424a1 1 0 0 0 0-1.366zM4.985 4.26a1 1 0 1 0-1.46-1.367L.32 6.317a1 1 0 0 0 0 1.366l3.203 3.424a1 1 0 0 0 1.46-1.367L2.422 7l2.564-2.74Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBracketSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
