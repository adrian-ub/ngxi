import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIceCream03Icon],svg[hugeicons-ice-cream-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2C9.004 2 6.317 4.749 7.156 7.783C7.389 8.627 6 8.963 6 9.873c0 2.71 4.5-.036 4.5 2.914c0 1.617 2.5 1.617 2.5 0c0-3.16 5 .037 5-2.914c0-.91-1.39-1.246-1.156-2.09C17.683 4.75 14.996 2 12 2"></svg:path><svg:path d="m7.5 11l.827 2.965C9.82 19.322 10.567 22 12 22s2.18-2.678 3.673-8.035L16.5 11"></svg:path></svg:g>`,
})
export class HugeiconsIceCream03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
