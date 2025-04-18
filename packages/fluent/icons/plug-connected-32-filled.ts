import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlugConnected32FilledIcon],svg[fluent-plug-connected-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.454 6.526a3.25 3.25 0 0 0 0 4.597l7.426 7.424a3.25 3.25 0 0 0 4.596 0l.036-.037a8.5 8.5 0 0 0 .666-11.272l3.53-3.53a1 1 0 0 0-1.415-1.414l-3.53 3.53a8.5 8.5 0 0 0-11.272.666zm5.095 14.351a3.25 3.25 0 0 1 0 4.596l-.036.037a8.5 8.5 0 0 1-11.273.666l-3.529 3.53a1 1 0 0 1-1.414-1.415l3.53-3.53a8.5 8.5 0 0 1 .665-11.272l.036-.036a3.25 3.25 0 0 1 4.596 0z"></svg:path>`,
})
export class FluentPlugConnected32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
