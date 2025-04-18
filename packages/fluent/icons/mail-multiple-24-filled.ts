import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailMultiple24FilledIcon],svg[fluent-mail-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.511a3.25 3.25 0 0 1 1.5 2.739v6c0 2.9-2.35 5.25-5.25 5.25h-9A3.25 3.25 0 0 1 5.511 20H17.25A3.75 3.75 0 0 0 21 16.25zm-1 .599v7.64a3.25 3.25 0 0 1-3.066 3.245L16.75 19H5.25a3.25 3.25 0 0 1-3.245-3.066L2 15.75V8.11l8.65 4.554a.75.75 0 0 0 .7 0zM5.25 4h11.5a3.25 3.25 0 0 1 3.155 2.466L11 11.153L2.095 6.466a3.25 3.25 0 0 1 2.966-2.46z"></svg:path>`,
})
export class FluentMailMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
