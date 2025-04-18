import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShredderIcon],svg[streamline-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 10.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1m1.5-2h8m-5.25 0v5"></svg:path><svg:path d="M3.5 8.5V11A1.5 1.5 0 0 1 2 12.5m6.25-4v5m2.25-5V11a1.5 1.5 0 0 0 1.5 1.5m-1.5-7v-3l-2-2h-5v5"></svg:path></svg:g>`,
})
export class StreamlineShredderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
