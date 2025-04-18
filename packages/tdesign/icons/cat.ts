import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCatIcon],svg[tdesign-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 .661L7.48 2.58c1.38-.605 2.911-.941 4.52-.941s3.14.336 4.52.94L23 .662v12.053h-.007C22.778 18.458 17.91 23 12 23S1.222 18.458 1.007 12.714H1zm2 5.516a11 11 0 0 1 2.137-2.205L3 3.339zm0 6.143C3 17.083 6.999 21 12 21s9-3.917 9-8.68c0-3.39-2.017-6.344-4.99-7.774A9.2 9.2 0 0 0 12 3.64a9.2 9.2 0 0 0-4.01.907C5.016 5.976 3 8.93 3 12.32m18-6.143V3.34l-2.137.633A11 11 0 0 1 21 6.177M9 9v3H7V9zm8 0v3h-2V9zm-5 3.264l.894 1.789c.379.757.857.985 1.189 1.013c.34.028.759-.131 1.085-.62l.555-.833l1.664 1.11l-.555.832c-.674 1.01-1.755 1.6-2.915 1.504c-.713-.06-1.371-.37-1.917-.885c-.546.515-1.204.826-1.917.885c-1.16.097-2.241-.493-2.915-1.504l-.555-.832l1.664-1.11l.555.832c.326.49.745.65 1.085.621c.332-.028.81-.256 1.189-1.013z"></svg:path>`,
})
export class TdesignCatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
