import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNavigationArrowOnIcon],svg[streamline-navigation-arrow-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.515 12.53a.5.5 0 0 0 .908-.029l4.596-10.865a.5.5 0 0 0-.655-.655L1.5 5.577a.5.5 0 0 0-.029.908l3.88 1.94a.5.5 0 0 1 .225.224l1.94 3.88Z"></svg:path>`,
})
export class StreamlineNavigationArrowOnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
