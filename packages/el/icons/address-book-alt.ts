import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAddressBookAltIcon],svg[el-address-book-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.635 0 0 268.635 0 600s268.635 600 600 600s600-268.635 600-600S931.365 0 600 0M263.688 263.688h672.626V382.75h-73.219v65.5h73.219v119h-73.219v65.5h73.219v119h-73.219v65.5h73.219v119.094H263.688zm299.687 117.468c-53.692 0-97.188 43.558-97.188 97.25c0 38.051 21.842 70.971 53.688 86.938l-124.438 74.5h-1.531v105.094h338.938V639.844h-1.531l-124.438-74.5c31.846-15.967 53.688-48.887 53.688-86.938c-.001-53.692-43.496-97.25-97.188-97.25"></svg:path>`,
})
export class ElAddressBookAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
