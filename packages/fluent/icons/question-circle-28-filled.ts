import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentQuestionCircle28FilledIcon],svg[fluent-question-circle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m0 16.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m0-11.75c-1.963 0-3.75 1.725-3.75 3.75a.75.75 0 0 0 1.5 0c0-1.184 1.104-2.25 2.25-2.25s2.25 1.066 2.25 2.25c0 .88-.241 1.385-.932 2.076l-.155.15l-.57.529c-.945.903-1.343 1.596-1.343 2.745a.75.75 0 0 0 1.5 0c0-.648.213-1.028.889-1.67l.164-.153l.204-.187l.197-.184c1.08-1.032 1.546-1.874 1.546-3.306c0-2.025-1.787-3.75-3.75-3.75"></svg:path>`,
})
export class FluentQuestionCircle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
