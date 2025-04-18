import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biChevronCompactUpIcon],svg[bi-chevron-compact-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56L2.224 9.447a.5.5 0 1 1-.448-.894z"></svg:path>`,
})
export class BiChevronCompactUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
