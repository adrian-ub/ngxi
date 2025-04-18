import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidYIcon],svg[fa6-solid-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"></svg:path>`,
})
export class Fa6SolidYIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
