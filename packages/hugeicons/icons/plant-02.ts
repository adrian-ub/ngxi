import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlant02Icon],svg[hugeicons-plant-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 10.5S12 12.5 12 15m-6 0h12M7 15l.51 3.566c.233 1.637.35 2.456.914 2.945S9.815 22 11.47 22h1.062c1.654 0 2.48 0 3.045-.49c.564-.488.68-1.307.915-2.944L17 15m-6.937-6.937a3.2 3.2 0 0 0 0-4.524C8.178 1.654 4.031 2.03 4.031 2.03s-.377 4.147 1.508 6.032a3.2 3.2 0 0 0 4.524 0m4.74 2.135a2.74 2.74 0 0 0 3.878 0c1.616-1.616 1.293-5.17 1.293-5.17s-3.555-.324-5.17 1.292a2.74 2.74 0 0 0 0 3.878"></svg:path><svg:path d="M10 8.5s2 2.5 2 6.5"></svg:path></svg:g>`,
})
export class HugeiconsPlant02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
