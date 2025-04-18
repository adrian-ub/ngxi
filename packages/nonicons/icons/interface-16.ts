import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsInterface16Icon],svg[nonicons-interface-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.683 4.524a2.794 2.794 0 1 0 0 5.587a2.794 2.794 0 0 0 0-5.587M7.365 7.317a4.317 4.317 0 1 1 8.635 0a4.317 4.317 0 0 1-8.635 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.127 8.08H3.556V6.555h4.571z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.063 7.317a1.524 1.524 0 1 1-3.047 0a1.524 1.524 0 0 1 3.047 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.54 6.81a.508.508 0 1 0 0 1.015a.508.508 0 0 0 0-1.015M0 7.317a2.54 2.54 0 1 1 5.08 0a2.54 2.54 0 0 1-5.08 0" clip-rule="evenodd"></svg:path>`,
})
export class NoniconsInterface16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
