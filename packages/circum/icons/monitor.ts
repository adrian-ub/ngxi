import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMonitorIcon],svg[circum-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.435 3.06H5.565a2.5 2.5 0 0 0-2.5 2.5v8.88a2.507 2.507 0 0 0 2.5 2.5h2.91l-.37 3H7a.5.5 0 0 0 0 1h10.01a.5.5 0 0 0 0-1H15.9l-.37-3h2.91a2.507 2.507 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.505-2.5M14.9 19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path>`,
})
export class CircumMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
