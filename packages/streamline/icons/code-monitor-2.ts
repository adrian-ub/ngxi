import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCodeMonitor2Icon],svg[streamline-code-monitor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6M7.5 2v9M3 5h2M3 8h1"></svg:path><svg:path d="m7.5 7l1.21-1a2 2 0 0 1 2.55 0l2.24 2"></svg:path></svg:g>`,
})
export class StreamlineCodeMonitor2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
