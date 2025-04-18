import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderCopyIcon],svg[lets-icons-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M9 6c0-.943 0-1.414.293-1.707S10.057 4 11 4h1.764c.601 0 .902 0 1.144.15c.241.149.376.418.645.956L15.5 7H19c.943 0 1.414 0 1.707.293S21 8.057 21 9v3c0 .943 0 1.414-.293 1.707S19.943 14 19 14h-8c-.943 0-1.414 0-1.707-.293S9 12.943 9 12z"></svg:path><svg:path stroke-miterlimit="1.414" d="M6 7H5a2 2 0 0 0-2 2v1m3 10H5a2 2 0 0 1-2-2v-1m10 3h1a2 2 0 0 0 2-2v-1m-5 3H8m-5-8v3"></svg:path></svg:g>`,
})
export class LetsIconsFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
