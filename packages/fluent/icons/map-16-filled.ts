import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMap16FilledIcon],svg[fluent-map-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.223L1.235 4.576A.5.5 0 0 0 1 5v8.5a.5.5 0 0 0 .765.424L5 11.902zm1 9.586l4 2V4.191l-4-2zm8.765-.385L11 13.777v-9.68l3.235-2.021A.5.5 0 0 1 15 2.5V11a.5.5 0 0 1-.235.424"></svg:path>`,
})
export class FluentMap16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
