import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNextSolidIcon],svg[streamline-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M6 8.25H1.25a1.25 1.25 0 1 1 0-2.5H6V3.707a.5.5 0 0 1 .854-.353l3.292 3.292a.5.5 0 0 1 0 .708l-3.292 3.292A.5.5 0 0 1 6 10.293z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNextSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
