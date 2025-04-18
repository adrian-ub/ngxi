import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixValidateIcon],svg[ix-validate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.9 64l-30.481 42.666H106.667v298.667h298.666V204.606L448 144.872V448H64V64zm8.407 24.934l34.72 24.8L269.713 357.77l-140.46-134.354l29.492-30.832l104.87 100.301zM421.333 64v7.308L411.102 64z"></svg:path>`,
})
export class IxValidateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
