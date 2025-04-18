import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor16FilledIcon],svg[fluent-desktop-cursor-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.501 2a1.5 1.5 0 0 0-1.5 1.5v6.997a1.5 1.5 0 0 0 1.5 1.5h2.5V13H4.495a.5.5 0 0 0 0 1H8v-1H7v-1.003h1.001L8.003 8.5a1.5 1.5 0 0 1 2.582-1.039l3.348 3.484q.067-.212.068-.447V3.5a1.5 1.5 0 0 0-1.5-1.5zm6.363 6.153a.5.5 0 0 0-.86.347L9 14.502a.5.5 0 0 0 .906.292l1.37-1.908l2.4.559a.5.5 0 0 0 .473-.834z"></svg:path>`,
})
export class FluentDesktopCursor16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
