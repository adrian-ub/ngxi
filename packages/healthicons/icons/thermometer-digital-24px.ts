import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigital24pxIcon],svg[healthicons-thermometer-digital-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.662 6.135a1 1 0 0 1 .293-1.383l3.992-2.59a1 1 0 0 1 1.383.293l1.122 1.728l-5.668 3.68z"></svg:path><svg:path fill-rule="evenodd" d="m6.601 9.121l5.668-3.68l2.726 4.195c.311.48.516 1.02.601 1.585l.651 4.335c.084.56.287 1.096.593 1.572l.934 1.437l-1.417.92l-.934-1.436a4 4 0 0 0-1.196-1.182L10.53 14.51a4 4 0 0 1-1.204-1.193zm3.176.462l2.18 3.355l1.677-1.09l-2.18-3.354z" clip-rule="evenodd"></svg:path><svg:path d="m16.865 20.357l.758 1.168a.85.85 0 0 0 1.426-.926l-.759-1.168z"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigital24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
