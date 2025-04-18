import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer1Icon],svg[streamline-database-server-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 1h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4-.5H11M1.5 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 10.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4-.5H11"></svg:path></svg:g>`,
})
export class StreamlineDatabaseServer1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
