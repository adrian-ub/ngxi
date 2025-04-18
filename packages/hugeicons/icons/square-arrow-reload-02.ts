import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareArrowReload02Icon],svg[hugeicons-square-arrow-reload-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16.5 11.546c0-1.647-.032-2.273-1.8-2.273H8.74c-.953 0-1.062-.225-.47-.973L9.3 7m-1.8 5.454c0 1.647.032 2.273 1.8 2.273h5.96c.953 0 1.062.226.47.973L14.7 17"></svg:path></svg:g>`,
})
export class HugeiconsSquareArrowReload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
