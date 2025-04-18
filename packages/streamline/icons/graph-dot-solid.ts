import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphDotSolidIcon],svg[streamline-graph-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5.75a.75.75 0 0 0-1.5 0v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.5V9.72l2.202-2.352c.291.166.628.26.986.26c.454 0 .872-.15 1.208-.406L7.319 8.55a2.002 2.002 0 1 0 3.387-.71l.002-.005l1.159-3.183a1.999 1.999 0 1 0-1.437-.438l-1.081 2.97a2.03 2.03 0 0 0-1.057.223L6.75 5.967a1 1 0 0 0-.08-.065a1.998 1.998 0 1 0-3.902.274l-.03.029L1.5 7.525z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphDotSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
