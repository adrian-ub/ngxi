import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBolt3Icon],svg[lineicons-bolt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.244 2.586a.75.75 0 0 1 .393.778l-1.285 8.385h4.452a.75.75 0 0 1 .516 1.294l-9.76 9.251a.75.75 0 0 1-1.257-.658l1.286-8.385H5.137a.75.75 0 0 1-.516-1.294l9.759-9.251a.75.75 0 0 1 .864-.12M7.018 11.75h3.444a.75.75 0 0 1 .742.864L10.118 19.7l6.804-6.45h-3.444a.75.75 0 0 1-.741-.864l1.086-7.084z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBolt3Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
