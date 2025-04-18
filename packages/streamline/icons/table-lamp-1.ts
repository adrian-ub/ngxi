import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTableLamp1Icon],svg[streamline-table-lamp-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3V1.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1V3a4 4 0 0 0-2 3.5h8a4 4 0 0 0-2-3.5"></svg:path><svg:path d="M6.5 1.5H8a4 4 0 0 1 4 4v8m1.5 0h-6"></svg:path></svg:g>`,
})
export class StreamlineTableLamp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
