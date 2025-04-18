import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple16FilledIcon],svg[fluent-table-simple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3h5.5V2zm3 6.5H2v3A2.5 2.5 0 0 0 4.5 14h3zm1 0H14v3a2.5 2.5 0 0 1-2.5 2.5h-3zm5.5-1v-3A2.5 2.5 0 0 0 11.5 2h-3v5.5z"></svg:path>`,
})
export class FluentTableSimple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
