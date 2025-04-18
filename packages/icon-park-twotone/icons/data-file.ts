import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDataFileIcon],svg[icon-park-twotone-data-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDataFile0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path fill="#555" d="M15 28h6v7h-6z"></svg:path><svg:path d="M14 35h20"></svg:path><svg:path fill="#555" d="M21 23h6v12h-6zm6-5h6v17h-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDataFile0)"></svg:path>`,
})
export class IconParkTwotoneDataFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
