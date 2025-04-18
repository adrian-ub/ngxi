import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biChevronCompactRightIcon],svg[bi-chevron-compact-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8L6.553 2.224a.5.5 0 0 1 .223-.671"></svg:path>`,
})
export class BiChevronCompactRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
