import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiyalRectangleIcon],svg[hugeicons-riyal-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 2.5h-1c-4.243 0-6.364 0-7.682 1.318S2.5 7.258 2.5 11.5v1c0 4.243 0 6.364 1.318 7.682S7.258 21.5 11.5 21.5h1c4.243 0 6.364 0 7.682-1.318S21.5 16.742 21.5 12.5v-1c0-4.243 0-6.364-1.318-7.682S16.742 2.5 12.5 2.5"></svg:path><svg:path d="M18 11v1a3 3 0 0 1-3 3m-4-7v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M8.5 8v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5.5 2.99v.01m2 0v.01"></svg:path></svg:g>`,
})
export class HugeiconsRiyalRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
