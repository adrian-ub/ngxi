import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSpellcheckIcon],svg[zmdi-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 277l-24-64H68l-23 64H0L109 0h40l109 277zM85 171h88L129 53zm323 12l30 30l-202 203l-109-109l30-30l79 79z"></svg:path>`,
})
export class ZmdiSpellcheckIcon {
  readonly viewBox = input("0 0 440 416")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
