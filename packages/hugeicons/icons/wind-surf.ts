import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindSurfIcon],svg[hugeicons-wind-surf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 21l-1 1m15-3H2c5 1.714 10.975 3 15 3c3 0 5-2.265 5-3M16.01 2c2.168 5 .286 14.344-1.01 17"></svg:path><svg:path d="M16.202 3.919c-.4-.377-1.191-.908-1.267-.917c-.86-.107-.973.416-1.971 1.886c-1.266 1.66-4.155 5.164-5.168 6.023m0 0c.574 1.78 1.512 4.605 7.296 6.025M7.796 10.91c1.28 1.729 6.138 2.12 8.406 2.1"></svg:path></svg:g>`,
})
export class HugeiconsWindSurfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
