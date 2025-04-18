import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMultipleFile2Icon],svg[streamline-multiple-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 2.5H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M4 5h4M4 7.5h4M4 10h2"></svg:path><svg:path d="M4.5.5H11a1 1 0 0 1 1 1V11"></svg:path></svg:g>`,
})
export class StreamlineMultipleFile2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
