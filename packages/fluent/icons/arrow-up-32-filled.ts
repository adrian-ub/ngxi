import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp32FilledIcon],svg[fluent-arrow-up-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 29c-.69 0-1.25-.56-1.25-1.25V7.213l-7.628 7.432a1.25 1.25 0 1 1-1.744-1.79l9.747-9.497a1.246 1.246 0 0 1 1.75 0l9.747 9.497a1.25 1.25 0 1 1-1.744 1.79L17.25 7.213V27.75c0 .69-.56 1.25-1.25 1.25"></svg:path>`,
})
export class FluentArrowUp32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
