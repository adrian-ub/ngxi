import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor20FilledIcon],svg[fluent-desktop-cursor-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1H11l.001-1H8v-2h3.002l.003-4.5a1.5 1.5 0 0 1 2.556-1.065l4.408 4.368q.03-.148.031-.303v-10A1.5 1.5 0 0 0 16.5 2zm9.357 8.145a.5.5 0 0 0-.852.355L12 18.498a.5.5 0 0 0 .9.301l1.995-2.646l3.496.776a.5.5 0 0 0 .46-.844z"></svg:path>`,
})
export class FluentDesktopCursor20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
