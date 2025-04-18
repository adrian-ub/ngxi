import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyViewIcon],svg[hugeicons-property-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.998 12.503s.002-.47.002-1c0-4.48 0-6.72-1.391-8.111S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.392S2 7.023 2 11.502c0 4.48 0 6.72 1.391 8.112C4.558 20.781 6.321 20.97 9.5 21M2 7h19M6 16h1m3-4h5m-9 0h1m10 6.5h.009"></svg:path><svg:path d="M21.772 18.023c.152.213.228.32.228.477c0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023"></svg:path></svg:g>`,
})
export class HugeiconsPropertyViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
