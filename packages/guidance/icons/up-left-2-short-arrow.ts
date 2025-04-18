import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUpLeft2ShortArrowIcon],svg[guidance-up-left-2-short-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.01 3.009L21 21M4.07 18.919c.785-.786 1.182-2.737 1.381-4.51c.258-2.282.159-4.6-.381-6.834C4.666 5.902 4.014 4.032 3 3.018M18.92 4.07c-.785.785-2.737 1.182-4.51 1.381c-2.282.258-4.6.159-6.834-.381C5.902 4.666 4.032 4.014 3.018 3"></svg:path>`,
})
export class GuidanceUpLeft2ShortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
