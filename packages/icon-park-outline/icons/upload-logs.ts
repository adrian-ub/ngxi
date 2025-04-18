import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUploadLogsIcon],svg[icon-park-outline-upload-logs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 44H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v18m-4.5 20V31"></svg:path><svg:path stroke-linejoin="round" d="m31 34.5l1.5-1.5l3-3l3 3l1.5 1.5"></svg:path><svg:path d="M16 16h16m-16 8h8"></svg:path></svg:g>`,
})
export class IconParkOutlineUploadLogsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
