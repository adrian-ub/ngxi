import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlateIcon],svg[hugeicons-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.43 13c.36.517.57 1.147.57 1.828C19 16.58 17.602 18 15.877 18q-.458-.001-.877-.127M18.98 10c1.805 1.019 3.02 2.924 3.02 5.106C22 18.361 19.298 21 15.965 21A6.1 6.1 0 0 1 12 19.55"></svg:path><svg:circle cx="9" cy="10" r="4"></svg:circle><svg:circle cx="9" cy="10" r="7"></svg:circle></svg:g>`,
})
export class HugeiconsPlateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
