import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDominoIcon],svg[hugeicons-domino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16c0 2.828 0 4.243-1.025 5.121S15.3 22 12 22s-4.95 0-5.975-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243 1.025-5.121S8.7 2 12 2s4.95 0 5.975.879C19 3.757 19 5.172 19 8zm-4.5 2h-.009m-4.99-2h-.009m2.516-9h-.01M19 12H5" color="currentColor"></svg:path>`,
})
export class HugeiconsDominoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
