import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthWorker24pxIcon],svg[healthicons-health-worker-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill-rule="evenodd" d="M3 16.777A4.777 4.777 0 0 1 7.777 12c.302 0 .6.07.87.205l.111.056a7 7 0 0 0 3.13.739h.223a7 7 0 0 0 3.131-.739l.111-.056c.27-.135.568-.205.87-.205A4.777 4.777 0 0 1 21 16.777V21H3zm12.75.473v1h1.5v-1h1v-1.5h-1v-1h-1.5v1h-1v1.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHealthWorker24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
