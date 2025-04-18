import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluent20FilledIcon],svg[fluent-fluent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.724 2.053a.5.5 0 0 0-.448 0l-5 2.5A.5.5 0 0 0 5 5v9.5a.5.5 0 0 0 .243.429l5 3A.5.5 0 0 0 11 17.5v-4.691l4.724-2.362a.5.5 0 0 0 0-.894L11.618 7.5l4.106-2.053a.5.5 0 0 0 0-.894z"></svg:path>`,
})
export class FluentFluent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
