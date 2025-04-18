import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidYinYangIcon],svg[fa-solid-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96m0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32"></svg:path>`,
})
export class FaSolidYinYangIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
