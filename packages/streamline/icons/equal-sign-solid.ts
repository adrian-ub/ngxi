import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEqualSignSolidIcon],svg[streamline-equal-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm0 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEqualSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
