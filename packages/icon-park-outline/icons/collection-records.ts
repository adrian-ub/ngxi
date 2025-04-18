import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCollectionRecordsIcon],svg[icon-park-outline-collection-records-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 22c0-9.941-8.059-18-18-18S4 12.059 4 22s8.059 18 18 18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33.3 30c-1.822 0-3.3 1.722-3.3 3.846c0 3.845 3.9 7.34 6 8.154c2.1-.813 6-4.31 6-8.154C42 31.722 40.523 30 38.7 30c-1.116 0-2.103.646-2.7 1.634c-.597-.988-1.584-1.634-2.7-1.634"></svg:path><svg:path d="M22 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g>`,
})
export class IconParkOutlineCollectionRecordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
