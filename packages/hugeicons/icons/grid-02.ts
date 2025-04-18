import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGrid02Icon],svg[hugeicons-grid-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 21.24c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h12.5v2.25c0 .41.34.75.75.75s.75-.34.75-.75v-2.25H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V6.99H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V3.24c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.25H5.75V3.24c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.25v10.5H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.25zm14-14.25v10.5H5.75V6.99z" color="currentColor"></svg:path>`,
})
export class HugeiconsGrid02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
