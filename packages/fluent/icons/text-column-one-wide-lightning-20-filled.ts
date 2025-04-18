import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColumnOneWideLightning20FilledIcon],svg[fluent-text-column-one-wide-lightning-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A.75.75 0 0 1 3.75 5h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.75m0 3A.75.75 0 0 1 3.75 8h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8.75M3.75 11a.75.75 0 0 0 0 1.5h7.793l.625-1.5zm7.168 3l-.625 1.5H3.75a.75.75 0 0 1 0-1.5zm.583 3.012h1.75l-.59 2.363c-.121.485.462.828.826.488l4.873-4.556c.497-.466.169-1.301-.512-1.301H16.75l.781-2.347a.5.5 0 0 0-.474-.659h-3.473a.5.5 0 0 0-.462.308l-2.083 5.01a.5.5 0 0 0 .462.694"></svg:path>`,
})
export class FluentTextColumnOneWideLightning20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
