import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignPictureFilledIcon],svg[ant-design-picture-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32M338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m513.9 437.1a8.1 8.1 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8c0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1c.3.3.7.6 1 1l99.4 118l158.1-187.5c2.8-3.4 7.9-3.8 11.3-1c.3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2"></svg:path>`,
})
export class AntDesignPictureFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
