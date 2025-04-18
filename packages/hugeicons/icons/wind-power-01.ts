import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower01Icon],svg[hugeicons-wind-power-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 14v8m6 0H6"></svg:path><svg:circle cx="12" cy="12.5" r="1.5"></svg:circle><svg:ellipse cx="12" cy="5" rx="2" ry="3"></svg:ellipse><svg:path d="M17.262 17.95c-1.417-.813-2.123-2.234-1.578-3.173s2.137-1.041 3.554-.228c1.417.814 2.123 2.235 1.578 3.174s-2.136 1.041-3.554.228M6.738 17.95c1.417-.813 2.123-2.234 1.578-3.173s-2.137-1.041-3.554-.228c-1.417.814-2.123 2.235-1.578 3.174s2.137 1.041 3.554.228M12 8v3m1 2l3 2m-5-2l-3 2M7.5 3C4.81 4.507 3 7.323 3 10.548q.001.743.124 1.452M16.5 3c2.69 1.507 4.5 4.323 4.5 7.548q-.001.743-.124 1.452"></svg:path></svg:g>`,
})
export class HugeiconsWindPower01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
