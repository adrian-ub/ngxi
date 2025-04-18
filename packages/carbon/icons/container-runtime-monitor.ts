import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerRuntimeMonitorIcon],svg[carbon-container-runtime-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 22.479A8.64 8.64 0 0 0 22 17a8.64 8.64 0 0 0-7.777 5.479L14 23l.223.522A8.64 8.64 0 0 0 22 29a8.64 8.64 0 0 0 7.777-5.478L30 23zM22 27a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path><svg:path fill="currentColor" d="M12 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v10h-2V6H6v20h6z"></svg:path>`,
})
export class CarbonContainerRuntimeMonitorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
