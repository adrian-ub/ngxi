import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCapcutRectangleIcon],svg[hugeicons-capcut-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.8 12L6 14.5c0 1.178 0 1.268.352 1.634c.351.366.917.366 2.048.366h4.801c1.132 0 1.698 0 2.05-.366s.351-.456.351-1.634M10.8 12L18 8.25M10.8 12L6 9.5c0-1.179 0-1.268.352-1.634C6.703 7.5 7.269 7.5 8.4 7.5h4.801c1.132 0 1.698 0 2.05.366s.351.455.351 1.634M10.8 12l7.2 3.75"></svg:path><svg:path d="M2.498 12c0-4.478 0-6.718 1.391-8.109S7.519 2.5 11.998 2.5c4.478 0 6.717 0 8.109 1.391c1.39 1.391 1.39 3.63 1.39 8.109c0 4.478 0 6.718-1.39 8.109c-1.392 1.391-3.63 1.391-8.11 1.391c-4.478 0-6.717 0-8.108-1.391S2.498 16.479 2.498 12"></svg:path></svg:g>`,
})
export class HugeiconsCapcutRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
