import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSiyuanIcon],svg[material-icon-theme-siyuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M2 11.976L10 4v16l-8 8Z"></svg:path><svg:path fill="#455a64" d="M30 11.976L22 4v15.99L30 28ZM10 4l6 6v16l-6-6Z"></svg:path><svg:path fill="#e53935" d="m22 4l-6 6v16l6-6.01Z"></svg:path>`,
})
export class MaterialIconThemeSiyuanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
