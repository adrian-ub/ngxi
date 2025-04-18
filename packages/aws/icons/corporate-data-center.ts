import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsCorporateDataCenterIcon],svg[aws-corporate-data-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#7D8998"></svg:rect><svg:path fill="#FFF" d="M12 17 15.5 17C15.776 17 16 16.776 16 16.5L16 7 23 7 23 16.5C23 16.776 23.224 17 23.5 17L27 17 27 33 12 33 12 17ZM28 33.5 28 16.5C28 16.224 27.776 16 27.5 16L24 16 24 6.5C24 6.224 23.776 6 23.5 6L15.5 6C15.224 6 15 6.224 15 6.5L15 16 11.5 16C11.224 16 11 16.224 11 16.5L11 33.5C11 33.776 11.224 34 11.5 34L27.5 34C27.776 34 28 33.776 28 33.5L28 33.5ZM24 31 25 31 25 29 24 29 24 31ZM19 31 20 31 20 29 19 29 19 31ZM14 31 15 31 15 29 14 29 14 31ZM24 27 25 27 25 24 24 24 24 27ZM19 27 20 27 20 24 19 24 19 27ZM14 27 15 27 15 24 14 24 14 27ZM24 22 25 22 25 19 24 19 24 22ZM19 12 20 12 20 9 19 9 19 12ZM19 17 20 17 20 14 19 14 19 17ZM19 22 20 22 20 19 19 19 19 22ZM14 22 15 22 15 19 14 19 14 22Z"></svg:path></svg:g>`,
})
export class AwsCorporateDataCenterIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
