import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAvroIcon],svg[carbon-avro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11H3c-1.1 0-2 .9-2 2v8h2v-4h2v4h2v-8c0-1.1-.9-2-2-2m0 4H3v-2h2zm16-4h-4v10h2v-4h.4l1.6 4h2l-1.6-4c.9-.2 1.6-1 1.6-2v-2c0-1.1-.9-2-2-2m0 4h-2v-2h2zm-9 3l-1-7H9l2 10h2l2-10h-2zm17-7h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 8h-2v-6h2z"></svg:path>`,
})
export class CarbonAvroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
