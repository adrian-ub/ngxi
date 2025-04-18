import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDishWasherIcon],svg[hugeicons-dish-washer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 6c0-3.31.69-4 4-4h12c3.31 0 4 .69 4 4v12c0 3.31-.69 4-4 4H6c-3.31 0-4-.69-4-4zm0 2h20M5 5h4m10 .009V5"></svg:path><svg:path d="M9 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6.003-.002v-2.445m0 0v-3.56c.67.084 1.436.402 1.785.744c.349.343.358.782.48 1.328c.126.564.247 1.096.226 1.183c-.026.59-2.4.31-2.491.306"></svg:path></svg:g>`,
})
export class HugeiconsDishWasherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
