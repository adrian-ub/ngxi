import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCometIcon],svg[tabler-comet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.5 18.5l-3 1.5l.5-3.5l-2-2l3-.5l1.5-3l1.5 3l3 .5l-2 2l.5 3.5zM4 4l7 7M9 4l3.5 3.5M4 9l3.5 3.5"></svg:path>`,
})
export class TablerCometIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
