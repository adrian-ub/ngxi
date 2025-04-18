import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignLayoutFilledIcon],svg[ant-design-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 912h496c17.7 0 32-14.3 32-32V340H384zm496-800H384v164h528V144c0-17.7-14.3-32-32-32m-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32"></svg:path>`,
})
export class AntDesignLayoutFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
