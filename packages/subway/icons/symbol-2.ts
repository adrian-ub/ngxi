import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySymbol2Icon],svg[subway-symbol-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.3 149.3C405.3 66.9 338.5 0 256 0S106.7 66.9 106.7 149.3c0 51.7 26.3 97.3 66.3 124.1L106.7 512h298.7l-66.3-238.6c39.9-26.8 66.2-72.3 66.2-124.1"></svg:path>`,
})
export class SubwaySymbol2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
