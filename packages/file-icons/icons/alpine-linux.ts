import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAlpineLinuxIcon],svg[file-icons-alpine-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384.021 34.277H127.98L0 256l127.979 221.723H384.02L512 256zM147.162 295.402l38.842-38.883v53.94c-13.629-.292-26.683-6.542-38.842-15.057m152.605 10.574c-23.746-24.482-54.327-55.142-87.534-88.178l-88.938 87.975c-14.019 9.87-37.42 2.977-55.82-10.409l145.119-143.48c45.914 48.296 93.57 96.194 143.036 143.68c-23.858 17.101-45.38 18.311-55.863 10.412m84.815 0l-71.318-71.078l-7.115 7.114l-33.299-32.934l40.43-40.44c43.107 43.431 85.462 86.176 127.164 126.926c-20.569 14.748-43.382 19.811-55.862 10.412"></svg:path>`,
})
export class FileIconsAlpineLinuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
