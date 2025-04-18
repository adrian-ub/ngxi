import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNavigationArrowOffSolidIcon],svg[streamline-navigation-arrow-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22l3.91 3.908l6.981-2.954a.5.5 0 0 1 .656.656L9.872 8.81l3.908 3.909a.75.75 0 1 1-1.06 1.06zm.085 4.914l2.355-.996l6.142 6.142l-.996 2.355a.5.5 0 0 1-.908.029L4.765 9.458a.5.5 0 0 0-.223-.223L.276 7.102a.5.5 0 0 1 .03-.908Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNavigationArrowOffSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
