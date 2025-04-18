import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStrokeOutsideIcon],svg[hugeicons-stroke-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 13c1.886 0 2.828 0 3.414.586S22 15.114 22 17v1c0 1.886 0 2.828-.586 3.414S19.886 22 18 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h1c1.886 0 2.828 0 3.414.586S11 4.114 11 6"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsStrokeOutsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
