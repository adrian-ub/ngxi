import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignFileZipFilledIcon],svg[ant-design-file-zip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4zM790.2 326L602 137.8V326zM296 136v64h64v-64zm64 64v64h64v-64zm-64 64v64h64v-64zm64 64v64h64v-64zm-64 64v64h64v-64zm64 64v64h64v-64zm-64 64v64h64v-64zm0 64v160h128V584zm48 48h32v64h-32z"></svg:path>`,
})
export class AntDesignFileZipFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
