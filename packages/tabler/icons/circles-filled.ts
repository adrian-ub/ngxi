import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCirclesFilledIcon],svg[tabler-circles-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12a5 5 0 1 1-4.995 5.217L1.5 17l.005-.217A5 5 0 0 1 6.5 12m11 0a5 5 0 1 1-4.995 5.217L12.5 17l.005-.217A5 5 0 0 1 17.5 12M12 2a5 5 0 1 1-4.995 5.217L7 7l.005-.217A5 5 0 0 1 12 2"></svg:path>`,
})
export class TablerCirclesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
