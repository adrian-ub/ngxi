import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRawIcon],svg[carbon-raw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.2 9l-.34 8l-.26 4.54l-.41-3.54l-.68-5.46h-2.02L24.81 18l-.41 3.54l-.26-4.54l-.34-8H22l1 14h2.27l.76-4.93l.46-4.07l.01-.03l.01.03l.46 4.07l.76 4.93H30l1-14zM18 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm-4-1v-4a2 2 0 0 0-2-2H2v14h2v-6h1.48l2.34 6H10l-2.37-6H8a2 2 0 0 0 2-2m-6-4h4v4H4z"></svg:path>`,
})
export class CarbonRawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
