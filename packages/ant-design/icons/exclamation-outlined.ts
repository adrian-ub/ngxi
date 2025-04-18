import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignExclamationOutlinedIcon],svg[ant-design-exclamation-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 804a64 64 0 1 0 128 0a64 64 0 1 0-128 0m32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignExclamationOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
