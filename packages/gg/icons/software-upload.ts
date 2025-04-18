import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSoftwareUploadIcon],svg[gg-software-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 14.986a1 1 0 1 0 2 0V7.828l3.243 3.243l1.414-1.414L12 4L6.343 9.657l1.414 1.414L11 7.83z"></svg:path><svg:path d="M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class GgSoftwareUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
