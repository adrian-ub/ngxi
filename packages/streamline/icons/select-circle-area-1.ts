import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSelectCircleArea1Icon],svg[streamline-select-circle-area-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.67a6.7 6.7 0 0 0-3 0m-1.91.8a7 7 0 0 0-1.19.93a7 7 0 0 0-.93 1.19M.67 5.5a6.7 6.7 0 0 0 0 3m.8 1.91a7 7 0 0 0 .93 1.19q.544.53 1.19.93m1.91.8a6.7 6.7 0 0 0 3 0m1.91-.8q.646-.4 1.19-.93q.53-.545.93-1.19m.8-1.91a6.7 6.7 0 0 0 0-3m-.8-1.91a7 7 0 0 0-.93-1.19a7 7 0 0 0-1.19-.93"></svg:path>`,
})
export class StreamlineSelectCircleArea1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
