import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEstimate02Icon],svg[hugeicons-estimate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 11V7.3c0-2.263 0-3.394-.775-4.097c-.776-.703-2.023-.703-4.52-.703h-4.41c-2.497 0-3.744 0-4.52.703S2.5 5.037 2.5 7.3v6.4c0 2.263 0 3.394.775 4.097c.776.703 2.023.703 4.52.703H11m-5.5-12h9m-9 4h1m3 0h1m3 0h1m-9 4h1m3 0h1"></svg:path><svg:circle cx="17.5" cy="17.5" r="4"></svg:circle><svg:path d="m18.5 18l-1-.5V16"></svg:path></svg:g>`,
})
export class HugeiconsEstimate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
