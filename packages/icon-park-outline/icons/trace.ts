import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTraceIcon],svg[icon-park-outline-trace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18"></svg:path><svg:path stroke-linecap="round" d="M24 15a9 9 0 1 0 9 9m-9 0l6.3-6.306"></svg:path><svg:path d="M30.3 11.426V17.7h6.325L42 12.3h-6.297V6z"></svg:path></svg:g>`,
})
export class IconParkOutlineTraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
