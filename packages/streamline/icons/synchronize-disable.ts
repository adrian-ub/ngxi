import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSynchronizeDisableIcon],svg[streamline-synchronize-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5 11l.5 2l-2 .5"></svg:path><svg:path d="M5.5 13A6.76 6.76 0 0 1 1 7a6 6 0 0 1 .66-2.736M4.95 1.36a6 6 0 0 0-2.19 1.394M9 3l-.5-2l2-.5"></svg:path><svg:path d="M8.5 1c2.3.84 4.5 3.42 4.5 6a6 6 0 0 1-1.731 4.2M9 12.64q.33-.117.642-.27M.5.5l13 13"></svg:path></svg:g>`,
})
export class StreamlineSynchronizeDisableIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
