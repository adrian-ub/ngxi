import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCloudUploadIcon],svg[icomoon-free-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.942 6.039a2.5 2.5 0 0 0-3.085-2.955a3 3 0 0 0-5.737.075A4 4 0 1 0 4 11h2v3h4v-3h3.5a2.5 2.5 0 0 0 .442-4.961M9 10v3H7v-3H4.5L8 6.5l3.5 3.5z"></svg:path>`,
})
export class IcomoonFreeCloudUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
