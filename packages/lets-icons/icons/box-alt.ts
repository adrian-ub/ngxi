import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltIcon],svg[lets-icons-box-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M4 7.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 3 8.657 3h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586S4 18.886 4 17z"></svg:path><svg:path stroke-linecap="round" d="M4 7h16M9 11a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
