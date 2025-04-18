import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditOff32FilledIcon],svg[fluent-edit-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 20.164l9.543 9.543a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l9.542 9.543l-7.478 7.479a3.7 3.7 0 0 0-1.002 1.84L2.022 28.79a1 1 0 0 0 1.188 1.188l6.22-1.333a3.7 3.7 0 0 0 1.84-1.002zm7.5-7.5l-5.024 5.024l-6.915-6.914l5.024-5.025zm-4.6-9.23a4.889 4.889 0 1 1 6.915 6.914l-.902.901l-6.914-6.914z"></svg:path>`,
})
export class FluentEditOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
