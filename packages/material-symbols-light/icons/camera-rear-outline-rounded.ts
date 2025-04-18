import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraRearOutlineRoundedIcon],svg[material-symbols-light-camera-rear-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.615V16.5q0 .213-.144.356t-.357.144t-.356-.144T17 16.5V4.616q0-.231-.192-.424T16.384 4H7.616q-.231 0-.424.192T7 4.615V16.5q0 .213-.144.356T6.499 17t-.356-.144T6 16.5zm6.001 5.346q.651 0 1.114-.464t.462-1.114t-.463-1.114t-1.115-.462t-1.113.463t-.463 1.115t.464 1.113T12 9.962m-.759 9.538H6.5q-.213 0-.356-.144T6 18.999t.144-.356t.356-.143h4.742l-1.246-1.246q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l1.888 1.889q.242.242.242.565t-.242.566l-1.888 1.888q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zm3.258 0q-.213 0-.356-.144T14 18.999t.144-.356t.356-.143h3q.213 0 .356.144t.144.357t-.144.356t-.356.143zM12 8.385"></svg:path>`,
})
export class MaterialSymbolsLightCameraRearOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
