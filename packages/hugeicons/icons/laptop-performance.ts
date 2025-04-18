import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopPerformanceIcon],svg[hugeicons-laptop-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 14.5v-8c0-1.886 0-2.828-.586-3.414S17.886 2.5 16 2.5H8c-1.886 0-2.828 0-3.414.586S4 4.614 4 6.5v8"></svg:path><svg:path d="M8 8.394h.162c.811 0 1.217 0 1.527.174s.448.48.727 1.093l.336.74c.183.404.275.605.423.599s.212-.214.341-.63l1.157-3.723c.133-.428.2-.642.349-.647s.239.203.417.62l.203.473c.27.628.404.942.717 1.121s.726.18 1.552.18H16M3.498 15.515L4.02 14.5h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989"></svg:path></svg:g>`,
})
export class HugeiconsLaptopPerformanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
