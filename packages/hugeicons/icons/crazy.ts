import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrazyIcon],svg[hugeicons-crazy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10 10c0 .5-.678 1-1.5 1S7 10.552 7 10m10 0c0-1.657-.672-3-1.5-3S14 8.343 14 10m2.633 3.5c.483.653.554 1.636-.185 2.321c-1.458 1.352-3.3-.117-4.242-.15c-.942-.034-1.444.884-3.343 1.284C7.709 17.2 7 16.5 7 15.67"></svg:path></svg:g>`,
})
export class HugeiconsCrazyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
