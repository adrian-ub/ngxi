import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBook04Icon],svg[hugeicons-book-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 4.945H16a1.5 1.5 0 0 1 1.5 1.5v1.5m-2.5 5H9m3 4H9"></svg:path><svg:path d="M18.497 2H6.307c-.496 0-1.005.073-1.406.368c-1.274.935-2.256 3.02-.273 4.903c.556.528 1.334.72 2.099.72h11.557c.793 0 2.216.113 2.216 2.536v7.454c0 2.22-1.79 4.019-3.997 4.019h-9.03c-2.204 0-3.807-1.557-3.933-3.929L3.506 5.166"></svg:path></svg:g>`,
})
export class HugeiconsBook04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
