import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoLabIcon],svg[hugeicons-eco-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.012 5.75h1.25v2.5h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h.238v3.55l-3.74 6.55c-.17.29-.26.62-.26.96c0 1.07.87 1.94 1.94 1.94h9.62c1.07 0 1.94-.87 1.94-1.94c0-.34-.08-.67-.25-.96l-3.75-6.55V9.75h.262c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25v-1.5h1.25c1.52 0 2.75-1.23 2.75-2.75V3c0-.41-.34-.75-.75-.75h-2c-.579 0-1.116.178-1.558.483a2.75 2.75 0 0 0-2.442-1.483h-2c-.41 0-.75.34-.75.75v1c0 1.52 1.23 2.75 2.75 2.75m2.75-.5V5c0-.69.56-1.25 1.25-1.25h1.25V4c0 .69-.56 1.25-1.25 1.25zM10.76 13.5V9.75h2.51v3.75c0 .13.04.26.1.37l3.84 6.73c.04.07.06.14.06.22c0 .24-.2.44-.44.44H7.2c-.24 0-.44-.2-.44-.44c0-.08.02-.15.06-.22l3.84-6.73c.07-.11.1-.24.1-.37M8.762 2.75h1.25c.69 0 1.25.56 1.25 1.25v.25h-1.25c-.69 0-1.25-.56-1.25-1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoLabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
