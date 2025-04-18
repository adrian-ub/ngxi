import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLogIcon],svg[streamline-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 8a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0"></svg:path><svg:path d="M2.5 4.5h9c1.105 0 2 1.567 2 3.5s-.895 3.5-2 3.5h-9m6-4.5h4.801M4.5 9.5H7m.5-5l-2-2"></svg:path></svg:g>`,
})
export class StreamlineLogIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
