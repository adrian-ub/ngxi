import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageCompositionIcon],svg[hugeicons-image-composition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.075 3.884c3.212.95 6.638.95 9.85 0c2.592-.767 3.888-1.15 4.482-.675C22 3.685 22 4.908 22 7.353v9.294c0 2.445 0 3.668-.593 4.144c-.594.476-1.89.092-4.482-.675a17.36 17.36 0 0 0-9.85 0c-2.592.767-3.888 1.15-4.482.675C2 20.315 2 19.092 2 16.647V7.353c0-2.445 0-3.668.593-4.144c.594-.476 1.89-.092 4.482.675"></svg:path><svg:path d="M7 20c3.947-4.157 8.382-9.67 15-5.536M9 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsImageCompositionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
