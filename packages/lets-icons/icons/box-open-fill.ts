import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenFillIcon],svg[lets-icons-box-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5 11h14v4c0 1.886 0 2.828-.586 3.414S16.886 19 15 19H9c-1.886 0-2.828 0-3.414-.586S5 16.886 5 15zM2.815 7.815L5 10l4-4l-2.411-1.608a1 1 0 0 0-1.155.033L2.922 6.308a1 1 0 0 0-.107 1.507m18.37 0L19 10l-4-4l2.411-1.608a1 1 0 0 1 1.155.033l2.512 1.883a1 1 0 0 1 .107 1.507"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10v1H6v-1l3-3h6z"></svg:path></svg:g>`,
})
export class LetsIconsBoxOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
