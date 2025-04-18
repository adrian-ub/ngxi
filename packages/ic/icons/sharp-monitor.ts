import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMonitorIcon],svg[ic-sharp-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v15h5l-1 1v2h12v-2l-1-1h5zm-2 13H4V5h16z"></svg:path>`,
})
export class IcSharpMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
