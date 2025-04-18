import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTagIcon],svg[streamline-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.719 9.391l3.89 3.89a.75.75 0 0 0 1.06 0l7.72-7.72a.36.36 0 0 0 .11-.29l-.59-3.83a.37.37 0 0 0-.35-.35l-3.83-.59a.36.36 0 0 0-.29.11l-7.72 7.72a.75.75 0 0 0 0 1.06"></svg:path><svg:path d="M9.889 4.611a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class StreamlineTagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
