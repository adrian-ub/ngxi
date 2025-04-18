import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPreciseMonitorIcon],svg[tdesign-precise-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v6h-2V2zm-9 .586L9.914 8.5L8.5 9.914L2.586 4zM21.414 4L15.5 9.914L14.086 8.5L20 2.586zm-11.146 7A2 2 0 0 1 14 12a2 2 0 0 1-3.732 1H2v-2zM16 11h6v2h-6zm-6.086 4.5L4 21.414L2.586 20L8.5 14.086zm5.586-1.414L21.414 20L20 21.414L14.086 15.5zM13 16v6h-2v-6z"></svg:path>`,
})
export class TdesignPreciseMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
