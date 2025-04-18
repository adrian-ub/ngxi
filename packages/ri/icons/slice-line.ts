import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSliceLineIcon],svg[ri-slice-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.69 12.915l1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536zm-2.827 0l5.656-5.657l-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415z"></svg:path>`,
})
export class RiSliceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
