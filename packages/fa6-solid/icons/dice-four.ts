import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidDiceFourIcon],svg[fa6-solid-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-32 224a32 32 0 1 0 0-64a32 32 0 1 0 0 64m224-224a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-32 224a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidDiceFourIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
