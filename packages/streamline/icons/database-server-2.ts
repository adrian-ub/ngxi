import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer2Icon],svg[streamline-database-server-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M7.5 3H11M1.5 5.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.25 8.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0-4.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7.5 8H11m-4 2.5v3m-5 0h10"></svg:path></svg:g>`,
})
export class StreamlineDatabaseServer2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
