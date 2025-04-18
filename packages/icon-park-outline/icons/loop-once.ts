import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLoopOnceIcon],svg[icon-park-outline-loop-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43.823 25.23a14 14 0 0 1-2.837 6.448A13.98 13.98 0 0 1 30 37H16C9.397 37 4 31.679 4 25c0-6.65 5.396-12 12-12h28"></svg:path><svg:path d="m38 7l6 6l-6 6"></svg:path></svg:g>`,
})
export class IconParkOutlineLoopOnceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
