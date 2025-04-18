import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShiftLockOffIcon],svg[material-symbols-light-shift-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm4-3.384v-3.847H5.115l3.289-4.371L15 14.994v1.622zm6.562-3.847l-5.98-5.978L12 3.577l6.885 9.192zm5.547 9.762L1.886 3.308l.714-.714l19.223 19.223z"></svg:path>`,
})
export class MaterialSymbolsLightShiftLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
