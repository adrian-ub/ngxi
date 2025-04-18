import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBalanceScaleIcon],svg[hugeicons-balance-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 5.75a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m2 2.65c.92-.26 1.64-.98 1.9-1.9H20c.41 0 .75-.34.75-.75S20.41 5 20 5h-5.35c-.33-1.15-1.39-2-2.65-2s-2.32.85-2.65 2H4c-.41 0-.75.34-.75.75s.34.75.75.75h5.35c.26.92.98 1.64 1.9 1.9V21H7c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75S17.41 21 17 21h-4.25zm5.06.06A.74.74 0 0 1 18.5 8h1c.3 0 .58.18.69.46l2.5 6c.04.09.06.19.06.29c0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75c0-.1.02-.2.06-.29zM19 9.5L17.12 14h3.76zm-2.12 6c.31.87 1.14 1.5 2.12 1.5s1.81-.63 2.12-1.5zM4.5 8c-.3 0-.58.18-.69.46l-2.5 6c-.04.09-.06.19-.06.29c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-.1-.02-.2-.06-.29l-2.5-6A.74.74 0 0 0 5.5 8zm-1.37 6L5 9.5L6.88 14zM5 17c-.98 0-1.81-.63-2.12-1.5h4.24C6.81 16.37 5.98 17 5 17" color="currentColor"></svg:path>`,
})
export class HugeiconsBalanceScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
