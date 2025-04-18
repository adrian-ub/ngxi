import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggRingIcon],svg[gg-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.343 3.686A8 8 0 0 1 7.936 2.45a8.01 8.01 0 0 1 8.128 0a8 8 0 0 1 1.593 1.236L12 9.343zM12 6.514L9.413 3.927a6.02 6.02 0 0 1 5.174 0z" clip-rule="evenodd"></svg:path><svg:path d="M2 12.658a9.98 9.98 0 0 1 3.692-7.76l1.423 1.424a8 8 0 1 0 9.77 0l1.423-1.424A9.98 9.98 0 0 1 22 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10"></svg:path></svg:g>`,
})
export class GgRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
