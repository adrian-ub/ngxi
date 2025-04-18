import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKaaba02Icon],svg[hugeicons-kaaba-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 22V5c0-1.414 0-2.121-.44-2.56C20.122 2 19.415 2 18 2H6c-1.414 0-2.121 0-2.56.44C3 2.878 3 3.585 3 5v17"></svg:path><svg:path d="M7 17c0-.943 0-1.414.293-1.707S8.057 15 9 15h1c.943 0 1.414 0 1.707.293S12 16.057 12 17v5H7zm-5 5h20M3 6h18M3 19h4m5 0h9M3.5 9h2m3 0h2m3 0h2m3 0h2"></svg:path></svg:g>`,
})
export class HugeiconsKaaba02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
