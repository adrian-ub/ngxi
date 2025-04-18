import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHajiIcon],svg[hugeicons-haji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.5 11.5l-3.41 1.745c-.944.484-1.66 1.32-1.943 2.342C3.67 17.308 3 20.069 3 22m11.5-10.5l3.41 1.745c.944.484 1.66 1.32 1.944 2.342C20.33 17.308 21 20.069 21 22M7 22c0-1.153.5-5 1.001-6"></svg:path><svg:path d="M8 16.959c1.436.236 4.846-.425 7-4.959m-3 8s5-2 6-6.5m2 3c-.455 2.207-1.5 4.5-3 5.5M15.5 9.058l.421-2.155C16.416 4.366 14.523 2 12 2S7.584 4.366 8.079 6.903l.42 2.155C8.834 10.768 10.3 12 12 12c1.702 0 3.167-1.231 3.5-2.942"></svg:path><svg:path d="m8 6l3.03-.864a3.5 3.5 0 0 1 1.94 0L16 6"></svg:path></svg:g>`,
})
export class HugeiconsHajiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
