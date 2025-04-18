import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerProbeIcon],svg[mdi-thermometer-probe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.47 3.47l-6 6l-2.94.53c-.31.03-.59.18-.81.4l-6.91 6.91a2.76 2.76 0 0 0 0 3.89a2.76 2.76 0 0 0 3.89 0l6.91-6.91c.22-.22.39-.5.42-.79l.51-2.96l6-6L22 2zM11 14.38c-.76 0-1.38-.62-1.38-1.38s.62-1.38 1.38-1.38s1.38.62 1.38 1.38A1.39 1.39 0 0 1 11 14.38"></svg:path>`,
})
export class MdiThermometerProbeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
