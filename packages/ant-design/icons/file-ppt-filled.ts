import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignFilePptFilledIcon],svg[ant-design-file-ppt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4zM790.2 326L602 137.8V326zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12c0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 0 0-12 12v276a12 12 0 0 0 12 12h32.53a12 12 0 0 0 12-12m0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33c0-32.05-18.12-50.12-49.87-50.12h-52.22z"></svg:path>`,
})
export class AntDesignFilePptFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
