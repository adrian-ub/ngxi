import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidArrowsUpToLineIcon],svg[fa6-solid-arrows-up-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 96h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V237.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm320 45.3c12.5 12.5 32.8 12.5 45.3 0l41.3-41.4V448c0 17.7 14.3 32 32 32s32-14.3 32-32V237.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3"></svg:path>`,
})
export class Fa6SolidArrowsUpToLineIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
