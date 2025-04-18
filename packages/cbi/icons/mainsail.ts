import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMainsailIcon],svg[cbi-mainsail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.305 15.59l-3.391 5.128l4.443.01L22 18.211a24.6 24.6 0 0 1-2.695-2.621M15.79 10.4L8.957 20.721l4.436.007l4.507-6.885a24.4 24.4 0 0 1-2.11-3.443m-2.301-7.128L2 20.713h4.437l8.319-12.67a24.7 24.7 0 0 1-1.267-4.771"></svg:path>`,
})
export class CbiMainsailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
