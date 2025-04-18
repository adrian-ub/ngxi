import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCompositionOvalIcon],svg[streamline-composition-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11a10.3 10.3 0 0 0 1-4a10.3 10.3 0 0 0-1-4A13.3 13.3 0 0 0 7 2a13.3 13.3 0 0 0-5.5 1a10.3 10.3 0 0 0-1 4a10.3 10.3 0 0 0 1 4A13.3 13.3 0 0 0 7 12a13.3 13.3 0 0 0 5.5-1"></svg:path>`,
})
export class StreamlineCompositionOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
