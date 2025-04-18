import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonTag48FilledIcon],svg[fluent-person-tag-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14C9 8.477 13.477 4 19 4s10 4.477 10 10s-4.477 10-10 10S9 19.523 9 14M3 32.249A4.25 4.25 0 0 1 7.25 28H21v6.674c0 1.594.633 3.122 1.76 4.249l3.967 3.967C24.407 43.64 21.763 44 19 44c-4.214 0-8.15-.837-11.08-2.62C4.942 39.567 3 36.755 3 33zm20-4.242v6.667c0 1.063.422 2.082 1.174 2.833l7.319 7.32a4.006 4.006 0 0 0 5.666 0l6.668-6.668a4.006 4.006 0 0 0 0-5.666l-7.32-7.32A4 4 0 0 0 33.674 24h-6.667A4.007 4.007 0 0 0 23 28.007M28.5 31a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentPersonTag48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
