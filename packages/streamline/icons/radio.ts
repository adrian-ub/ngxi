import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioIcon],svg[streamline-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 4h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M1.37 4L13.5.5"></svg:path><svg:path d="M4.5 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5-2.75H11m-1.5 2.5H11M.5 6.5h13"></svg:path></svg:g>`,
})
export class StreamlineRadioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
