import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown32FilledIcon],svg[fluent-arrow-down-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c.69 0 1.25.56 1.25 1.25v20.537l7.628-7.432a1.25 1.25 0 1 1 1.744 1.79l-9.747 9.498a1.3 1.3 0 0 1-.386.258l-.017.007a1.25 1.25 0 0 1-1.347-.266l-9.747-9.497a1.25 1.25 0 0 1 1.744-1.79l7.628 7.432V4.25c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class FluentArrowDown32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
