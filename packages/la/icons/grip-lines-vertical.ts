import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGripLinesVerticalIcon],svg[la-grip-lines-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v26h2V3zm8 0v26h2V3z"></svg:path>`,
})
export class LaGripLinesVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
