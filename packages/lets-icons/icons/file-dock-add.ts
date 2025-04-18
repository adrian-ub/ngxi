import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFileDockAddIcon],svg[lets-icons-file-dock-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M9 13h6M9 9h4m-4 8h4"></svg:path><svg:path d="M19 13v2c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3"></svg:path><svg:path stroke-linecap="round" d="M18 3v6m3-3h-6"></svg:path></svg:g>`,
})
export class LetsIconsFileDockAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
