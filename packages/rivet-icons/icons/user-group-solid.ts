import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserGroupSolidIcon],svg[rivet-icons-user-group-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 3a3 3 0 1 1 6 0a3 3 0 0 1-6 0M0 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H0z"></svg:path><svg:path d="M8.873 7.003a4 4 0 0 1-1.278 2.041A4 4 0 0 1 11 13h5v-3a3 3 0 0 0-3-3H9q-.063 0-.127.003M5 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class RivetIconsUserGroupSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
