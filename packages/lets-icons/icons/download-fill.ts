import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownloadFillIcon],svg[lets-icons-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 10.67V13a2.5 2.5 0 0 1-5 0v-2.33a5.02 5.02 0 0 0-2.064 2.285c-.163.364-.245.546-.303.627c-.176.247-.318.339-.616.399C6.419 14 6.28 14 6 14a3 3 0 0 0 0 6h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02c-.298-.06-.44-.152-.616-.4c-.058-.08-.14-.262-.303-.626A5.02 5.02 0 0 0 14.5 10.67" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12 3l-.707-.707l.707-.707l.707.707zm1 10a1 1 0 1 1-2 0zM7.293 6.293l4-4l1.414 1.414l-4 4zm5.414-4l4 4l-1.414 1.414l-4-4zM13 3v10h-2V3z"></svg:path>`,
})
export class LetsIconsDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
