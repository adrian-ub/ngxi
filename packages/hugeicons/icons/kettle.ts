import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKettleIcon],svg[hugeicons-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 17c0 1.95.028 4 2.4 4h11.2c2.372 0 2.4-2.05 2.4-4a8 8 0 1 0-16 0"></svg:path><svg:path d="M8 9V8a2 2 0 1 1 4 0v1m6 8a2 2 0 0 0 2-2v-2a2 2 0 0 1 2-2"></svg:path><svg:path d="M16 11.5V9A6 6 0 0 0 4 9v2.5M2 17h10"></svg:path></svg:g>`,
})
export class HugeiconsKettleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
