import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRecordIcon],svg[ls-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 207v-95C85 51 140 0 210 0c69 0 125 51 125 112v95zm337 6v191c-41 112-162 129-162 129v127h133v57H27v-57h134V533S41 516 0 404V213l49-23v174s15 117 161 117s163-117 163-117V190zm-87 27v86c0 61-56 112-125 112c-70 0-125-51-125-112v-86z"></svg:path>`,
})
export class LsRecordIcon {
  readonly viewBox = input("0 0 422 717")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
