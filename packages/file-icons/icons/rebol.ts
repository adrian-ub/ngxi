import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRebolIcon],svg[file-icons-rebol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M508.001 256c0 141.385-112.825 256-252.001 256S3.999 397.385 3.999 256S116.824 0 256 0s252.001 114.615 252.001 256M248.975 117.092c-75.701 0-137.069 60.555-137.069 135.253s61.368 135.253 137.069 135.253s137.068-60.555 137.068-135.253s-61.368-135.253-137.068-135.253m0 79.956c-30.95 0-56.04 24.757-56.04 55.297s25.09 55.297 56.04 55.297s56.039-24.757 56.039-55.297s-25.09-55.297-56.04-55.297"></svg:path>`,
})
export class FileIconsRebolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
