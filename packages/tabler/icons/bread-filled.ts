import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBreadFilledIcon],svg[tabler-bread-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a4 4 0 0 1 3.109 6.516l-.11.126L21 18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-3-3V9.644l-.116-.136a4 4 0 0 1-.728-3.616l.067-.21c.532-1.525 1.93-2.58 3.601-2.677l12.079.001z"></svg:path>`,
})
export class TablerBreadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
