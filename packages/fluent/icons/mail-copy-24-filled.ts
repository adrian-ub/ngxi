import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailCopy24FilledIcon],svg[fluent-mail-copy-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.511a3.25 3.25 0 0 0-1.5 2.739v6c0 2.9 2.35 5.25 5.25 5.25h9c1.15 0 2.161-.598 2.739-1.5H6.75A3.75 3.75 0 0 1 3 16.25zm1 .599v7.64a3.25 3.25 0 0 0 3.066 3.245L7.25 19h11.5a3.25 3.25 0 0 0 3.245-3.066L22 15.75V8.11l-8.65 4.554a.75.75 0 0 1-.7 0zM18.75 4H7.25a3.25 3.25 0 0 0-3.155 2.466L13 11.153l8.905-4.687a3.25 3.25 0 0 0-2.966-2.46z"></svg:path>`,
})
export class FluentMailCopy24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
