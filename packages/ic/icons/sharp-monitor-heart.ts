import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMonitorHeartIcon],svg[ic-sharp-monitor-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.11 12.45L14 10.24l-3.11 6.21c-.16.34-.51.55-.89.55s-.73-.21-.89-.55L7.38 13H2v7h20v-7h-6c-.38 0-.73-.21-.89-.55"></svg:path><svg:path fill="currentColor" d="M22 4H2v7h6c.38 0 .73.21.89.55L10 13.76l3.11-6.21a1 1 0 0 1 1.79 0L16.62 11H22z"></svg:path>`,
})
export class IcSharpMonitorHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
