import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphInboxDownloadIcon],svg[si-glyph-inbox-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="m6.198 4.256l2.19 2.513a.81.81 0 0 0 1.143 0l2.189-2.513c.314-.315.363-.876.049-1.19H9.965V1.144c0-.559-.433-1.01-.968-1.01s-.969.451-.969 1.01v1.922H6.247c-.315.315-.364.874-.049 1.19"></svg:path><svg:path d="M7 10h4.031v1.031H7z"></svg:path><svg:path fill="currentColor" d="M14.993 1.006h-3.962v.975h3.146L15.54 9.01H2.505l1.407-7.029h3.057v-.975H3.073l-2.06 8.755v4.17c0 1.334.472 2.028 1.804 2.028h12.28c1.246 0 1.885-.527 1.885-2.111V9.761zM11.016 11H6.985V9.969h4.031z"></svg:path></svg:g>`,
})
export class SiGlyphInboxDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
