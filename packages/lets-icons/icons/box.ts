import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxIcon],svg[lets-icons-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4 9.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 10h16"></svg:path><svg:path fill="currentColor" d="M14.833 9H9.166c-.235 0-.353 0-.426.073s-.074.191-.074.427v4.167c0 .765 0 1.147.1 1.352a1 1 0 0 0 1.231.51c.215-.075.486-.345 1.027-.886c.25-.25.375-.376.508-.446a1 1 0 0 1 .935 0c.133.07.259.196.51.446c.54.54.81.811 1.026.887a1 1 0 0 0 1.231-.51c.1-.206.1-.588.1-1.353V9.5c0-.236 0-.354-.074-.427C15.187 9 15.069 9 14.833 9"></svg:path></svg:g>`,
})
export class LetsIconsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
