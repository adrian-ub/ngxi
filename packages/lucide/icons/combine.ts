import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCombineIcon],svg[lucide-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 18H5a3 3 0 0 1-3-3v-1M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m6-8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path><svg:path d="m7 21l3-3l-3-3"></svg:path><svg:rect width="8" height="8" x="14" y="14" rx="2"></svg:rect><svg:rect width="8" height="8" x="2" y="2" rx="2"></svg:rect></svg:g>`,
})
export class LucideCombineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
