import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTagAltIcon],svg[streamline-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.5 9.45l2.71-2.71a.36.36 0 0 0 .11-.29l-.59-3.84a.37.37 0 0 0-.34-.34l-3.84-.59a.36.36 0 0 0-.29.11L4.55 4.5M3.191 5.859L.75 8.3a.75.75 0 0 0 0 1.06l3.89 3.89a.75.75 0 0 0 1.06 0l2.441-2.441M11.75 2.25L13.47.53"></svg:path><svg:path d="M9.243 4.93a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineTagAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
