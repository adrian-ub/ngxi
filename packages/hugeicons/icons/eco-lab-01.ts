import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoLab01Icon],svg[hugeicons-eco-lab-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.75h1.25v2.5H8c-.41 0-.75.34-.75.75s.34.75.75.75h.25V19c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75V9.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.25v-1.5H14c1.52 0 2.75-1.23 2.75-2.75V3c0-.41-.34-.75-.75-.75h-2c-.579 0-1.115.178-1.558.483A2.75 2.75 0 0 0 10 1.25H8c-.41 0-.75.34-.75.75v1c0 1.52 1.23 2.75 2.75 2.75m2.75-.5V5c0-.69.56-1.25 1.25-1.25h1.25V4c0 .69-.56 1.25-1.25 1.25zM9.75 19V9.75h4.5V19c0 1.24-1.01 2.25-2.25 2.25S9.75 20.24 9.75 19m-1-16.25H10c.69 0 1.25.56 1.25 1.25v.25H10c-.69 0-1.25-.56-1.25-1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoLab01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
