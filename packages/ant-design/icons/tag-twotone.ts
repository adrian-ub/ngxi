import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignTagTwotoneIcon],svg[ant-design-tag-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M589 164.6L189.3 564.3l270.4 270.4L859.4 435L836 188zM680 432c-48.5 0-88-39.5-88-88s39.5-88 88-88s88 39.5 88 88s-39.5 88-88 88"></svg:path><svg:path fill="currentColor" d="M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88s88-39.5 88-88s-39.5-88-88-88m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path><svg:path fill="currentColor" d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8a9.9 9.9 0 0 0 7.1 2.9c2.7 0 5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8M459.7 834.7L189.3 564.3L589 164.6L836 188l23.4 247z"></svg:path>`,
})
export class AntDesignTagTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
