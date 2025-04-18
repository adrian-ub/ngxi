import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReflexIcon],svg[hugeicons-reflex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 10.5H11.829c-1.136 0-1.704 0-2.17.271c-.467.272-.747.765-1.308 1.753l-4.642 8.928M22.001 10.5c0-.56-2.001-2-2.001-2m2 2c0 .56-2 2-2 2M3.708 21.452C3.238 21.18 3 18.794 3 18.794m.708 2.658c.47.273 2.645-.713 2.645-.713"></svg:path><svg:path d="M15.937 10.5q.063-.467.063-.951C16 5.656 12.866 2.5 9 2.5S2 5.656 2 9.549C2 12.36 3.635 14.869 6 16"></svg:path></svg:g>`,
})
export class HugeiconsReflexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
