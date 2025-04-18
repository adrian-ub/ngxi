import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFencingMaskIcon],svg[hugeicons-fencing-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 20c3.5 0 8-5.706 8-10.159C20 4.644 16.57 1.983 12 2c-4.572.017-8 2.644-8 7.841C4 14.294 8.5 20 12 20m0-18v18"></svg:path><svg:path d="M4.5 8c3.5 2 11.5 2 15 0m-15 5c3.5 2 11.5 2 15 0M6 16c0 2.4-1 4.8-3 6m15-6c0 2.4 1 4.8 3 6"></svg:path></svg:g>`,
})
export class HugeiconsFencingMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
