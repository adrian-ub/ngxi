import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFps6020FilledIcon],svg[fluent-fps-60-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2A2.5 2.5 0 0 0 4 4.5v3A2.5 2.5 0 1 0 6.5 5h-.107c-.316 0-.617.061-.893.172V4.5a1 1 0 0 1 1-1h.25a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 6.75 2zm-1 5.5v-.107c0-.493.4-.893.893-.893H6.5a1 1 0 1 1-1 1m6-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm1-2.5A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2m-9 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4zm1.5 3H9v-2h1a1 1 0 1 1 0 2m3-1.25c0-.966.784-1.75 1.75-1.75h.75a1.5 1.5 0 0 1 1.5 1.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.75a.75.75 0 0 0 0-1.5h-.5A1.75 1.75 0 0 1 13 13.75"></svg:path>`,
})
export class FluentFps6020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
