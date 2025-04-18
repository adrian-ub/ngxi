import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlug02Icon],svg[hugeicons-plug-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 8v3m-4 0V8m-1.997 4.027C7.958 11.473 8.426 11 9.02 11h5.96c.594 0 1.062.473 1.017 1.027l-.123 1.513a6.1 6.1 0 0 1-1.12 3.046l-.4.563a2.08 2.08 0 0 1-1.698.851h-1.312a2.08 2.08 0 0 1-1.698-.851l-.4-.563a6.1 6.1 0 0 1-1.12-3.046z"></svg:path><svg:path d="M16 21.21c3.532-1.546 6-5.078 6-9.188C22 6.487 17.523 2 12 2S2 6.487 2 12.022c0 5.198 3.947 9.471 9.001 9.974c.55.054.999-.4.999-.953v-3.007"></svg:path></svg:g>`,
})
export class HugeiconsPlug02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
