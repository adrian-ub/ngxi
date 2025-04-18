import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerFillIcon],svg[ph-crane-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M127.73 208H112v-44a4 4 0 0 0-4-4H44a4 4 0 0 0-4 4v44H24.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h104a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47"></svg:path><svg:path d="M239.73 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24.27A8.17 8.17 0 0 0 16 87.47A8 8 0 0 0 24 96h16v44a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96h96v88h-16v-7.73a8.18 8.18 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47M56 80V48h19.06l16 32Z"></svg:path></svg:g>`,
})
export class PhCraneTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
