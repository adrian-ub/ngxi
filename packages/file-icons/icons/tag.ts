import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTagIcon],svg[file-icons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.429 0H73.143L0 73.143v146.286L292.571 512L512 292.571zM36.57 201.143V91.429L91.43 36.57h109.714l256 256L292.57 457.143zM256 146.286L146.286 256L292.57 402.286L402.286 292.57zM201.143 256L256 201.143l91.429 91.428l-54.858 54.858zm-82.306-112.175c-12.163-7.012-12.163-24.638 0-31.65s27.449 1.801 27.449 15.825s-15.287 22.837-27.45 15.825M182.857 128c0-42.072-45.859-68.51-82.347-47.474s-36.49 73.912 0 94.948s82.347-5.402 82.347-47.474"></svg:path>`,
})
export class FileIconsTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
