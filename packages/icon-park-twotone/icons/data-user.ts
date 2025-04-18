import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDataUserIcon],svg[icon-park-twotone-data-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDataUser0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8"></svg:path><svg:path d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4"></svg:path><svg:path fill="#555" d="M22 8c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4"></svg:path><svg:path d="M32 6h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6"></svg:path><svg:circle cx="35" cy="29" r="5" fill="#555"></svg:circle><svg:path fill="#555" d="M44 44H26a9 9 0 1 1 18 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDataUser0)"></svg:path>`,
})
export class IconParkTwotoneDataUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
