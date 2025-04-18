import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalPackerIcon],svg[devicon-original-packer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1daeff" fill-rule="evenodd" d="M66.477 39.691v88.547L24.918 104.23V15.676zm0 0"></svg:path><svg:path fill="#1d94dd" d="M87.055 26.023L41.879 0v18.078l30.715 17.738v54.22l14.46 8.284c8.95 5.168 16.266 2.07 16.266-6.875V51.688c0-8.95-7.316-20.497-16.265-25.665zm0 0"></svg:path>`,
})
export class DeviconOriginalPackerIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
