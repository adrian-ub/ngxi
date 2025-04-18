import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineApplicationAddIcon],svg[streamline-application-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5.75-2V.5M8 3.25h5.5"></svg:path>`,
})
export class StreamlineApplicationAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
