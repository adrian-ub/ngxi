import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMonitorOIcon],svg[pajamas-monitor-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 10.5v-8h13v8zM5 12H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-4v1.5h1.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H5zm1.5 0v1.5h3V12z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMonitorOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
