import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignInsertRowBelowOutlinedIcon],svg[ant-design-insert-row-below-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 768H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8m-25.3-608H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V192c.1-17.7-14.8-32-33.2-32M360 616H184V456h176zm0-224H184V232h176zm240 224H424V456h176zm0-224H424V232h176zm240 224H664V456h176zm0-224H664V232h176z"></svg:path>`,
})
export class AntDesignInsertRowBelowOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
