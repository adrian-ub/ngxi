import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltFillIcon],svg[lets-icons-box-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4 7.414c0-.204 0-.306.038-.398s.11-.164.255-.309l1.535-1.535c.578-.578.868-.868 1.235-1.02S7.84 4 8.657 4h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l1.535 1.535c.145.145.217.217.255.309s.038.194.038.398V8H4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 8H3v9c0 1.886 0 2.828.586 3.414S5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586S21 18.886 21 17zm-11 3a1 1 0 1 0-2 0a4 4 0 1 0 8 0a1 1 0 1 0-2 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
