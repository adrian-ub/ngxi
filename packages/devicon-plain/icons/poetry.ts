import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainPoetryIcon],svg[devicon-plain-poetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.215 5.332v95.61h.002L40.07 124.8a121.7 121.7 0 0 0 62.242-33.367L83.819 72.939L16.252 5.367l69.35 65.738c16.25-17.138 26.222-40.29 26.222-65.773z"></svg:path>`,
})
export class DeviconPlainPoetryIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
