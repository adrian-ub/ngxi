import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignOneToOneOutlinedIcon],svg[ant-design-one-to-one-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M316 672h60c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8m196-50c22.1 0 40-17.9 40-39c0-23.1-17.9-41-40-41s-40 17.9-40 41c0 21.1 17.9 39 40 39m0-140c22.1 0 40-17.9 40-39c0-23.1-17.9-41-40-41s-40 17.9-40 41c0 21.1 17.9 39 40 39"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" d="M648 672h60c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignOneToOneOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
