import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDataFileIcon],svg[icon-park-outline-data-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path d="M15 28h6v7h-6zm-1 7h20M21 23h6v12h-6zm6-5h6v17h-6z"></svg:path></svg:g>`,
})
export class IconParkOutlineDataFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
