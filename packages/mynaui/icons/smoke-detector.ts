import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSmokeDetectorIcon],svg[mynaui-smoke-detector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.56 12.047c2.667 3.314-2.667 4.64 0 7.953M12 12.047c2.667 3.314-2.667 4.64 0 7.953m-4.56-7.953c2.667 3.314-2.667 4.64 0 7.953M18 4H6m10.667 0c0 2.771-1.671 5.302-4.667 5.302S7.333 6.772 7.333 4"></svg:path>`,
})
export class MynauiSmokeDetectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
