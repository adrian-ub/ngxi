import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMemory16Icon],svg[qlementine-icons-memory-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7.5A1.5 1.5 0 0 1 3.5 6h9A1.5 1.5 0 0 1 14 7.5v1a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 8.5zM3.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5a.5.5 0 0 0-1 0V4C1.34 4 0 5.34 0 7v2c0 1.66 1.34 3 3 3v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3V2.5a.5.5 0 0 0-1 0V4h-2V2.5a.5.5 0 0 0-1 0V4H7V2.5a.5.5 0 0 0-1 0V4H4zM3 5c-1.1 0-2 .895-2 2v2c0 1.1.895 2 2 2h10c1.1 0 2-.895 2-2V7c0-1.1-.895-2-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMemory16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
