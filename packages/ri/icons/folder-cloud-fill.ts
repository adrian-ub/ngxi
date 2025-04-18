import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderCloudFillIcon],svg[ri-folder-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v6.36c-.998-1.42-2.646-2.36-4.5-2.36c-2.602 0-4.799 1.853-5.36 4.282A4.74 4.74 0 0 0 10 18.25c0 1.025.325 1.974.877 2.75H3a1 1 0 0 1-1-1zm12.002 11.603A2.751 2.751 0 0 0 14.75 21h5.5a2.75 2.75 0 0 0 .749-5.397C21.055 13.658 19.448 12 17.5 12s-3.555 1.658-3.498 3.603"></svg:path>`,
})
export class RiFolderCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
