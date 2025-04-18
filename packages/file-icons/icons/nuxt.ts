import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNuxtIcon],svg[file-icons-nuxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.662 81.35L0 430.65h130.774l139.945-239.803zm134.256 40.313l-39.023 69.167l138.703 239.82H512zm-51.596 91.052L155.924 430.651h253.485z"></svg:path>`,
})
export class FileIconsNuxtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
