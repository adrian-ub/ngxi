import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpoonAndKnifeIcon],svg[hugeicons-spoon-and-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 17.33A6.99 6.99 0 0 0 12 20a6.98 6.98 0 0 0 5-2.101M8.5 6.936A6.97 6.97 0 0 1 12 6c1.959 0 3.73.804 5 2.101M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0M6 7c0 1.38-.895 2-2 2s-2-.62-2-2s.895-3 2-3s2 1.62 2 3m13.5 6V4h.5a2 2 0 0 1 2 2v7zm0 0v7M4 9v11" color="currentColor"></svg:path>`,
})
export class HugeiconsSpoonAndKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
