import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUploadFileSolidIcon],svg[streamline-upload-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.44.44A1.5 1.5 0 0 1 2.5 0h6a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 12.5v-11c0-.398.158-.78.44-1.06m5.747 2.993l.104.104c.116.076.216.176.292.292l1.854 1.854a.625.625 0 0 1-.442 1.067h-1.25v3.625a1 1 0 1 1-2 0V6.75h-1.25a.625.625 0 0 1-.442-1.067L5.907 3.83c.076-.116.176-.216.292-.292l.104-.104a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUploadFileSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
