import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsConstant16Icon],svg[nonicons-constant-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 5.8A.8.8 0 0 1 .8 5h14.4a.8.8 0 0 1 0 1.6H.8a.8.8 0 0 1-.8-.8m.8 4.8a.8.8 0 0 1 .8.8v1.333h3.2V11.4a.8.8 0 0 1 1.6 0v1.333h3.2V11.4a.8.8 0 0 1 1.6 0v1.333h3.2V11.4a.8.8 0 0 1 1.6 0v2.933H0V11.4a.8.8 0 0 1 .8-.8" clip-rule="evenodd"></svg:path>`,
})
export class NoniconsConstant16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
