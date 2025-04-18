import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlaggingTaxiIcon],svg[carbon-flagging-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.798 2l-4.442 6.664A3 3 0 0 1 17.859 10H12a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16h-2v12h-4v-9h-2v-6a1 1 0 0 1 1-1h5.86a4.99 4.99 0 0 0 4.16-2.227l4.442-6.664Z"></svg:path><svg:path fill="currentColor" d="M11 5a4 4 0 1 1 4 4a4.004 4.004 0 0 1-4-4m2 0a2 2 0 1 0 2-2a2 2 0 0 0-2 2"></svg:path>`,
})
export class CarbonFlaggingTaxiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
