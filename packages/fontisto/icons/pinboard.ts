import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPinboardIcon],svg[fontisto-pinboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.352 14.585L8.843 19.2l.72-4.062L3.428 7.57L0 7.752L7.58-.001v2.953l7.214 6.647l4.513-1.105l-4.689 4.982L24 23.999z"></svg:path>`,
})
export class FontistoPinboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
