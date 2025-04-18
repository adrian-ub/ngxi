import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUnFlagLtrIcon],svg[ooui-un-flag-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.14 8.48L17 6L5.58 1.92zM1.22 0L0 1.22l3 3V19h2v-6.87l3.91-2L18.78 20L20 18.78z"></svg:path>`,
})
export class OouiUnFlagLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
