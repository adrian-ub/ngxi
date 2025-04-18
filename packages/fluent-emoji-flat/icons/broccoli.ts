import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBroccoliIcon],svg[fluent-emoji-flat-broccoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M18.762 21.174a.967.967 0 0 0-1.34-.28l-4.96 3.25l2.13-4.23c.24-.48.07-1.07-.4-1.32a.98.98 0 0 0-1.32.42l-2.15 4.26l-.34-5.92a.97.97 0 0 0-1.02-.91a.97.97 0 0 0-.91 1.02l.19 3.34c.08 1.4-.21 2.81-.84 4.06l-.97 1.93c-.32.64-.07 1.43.58 1.76l2.78 1.4c.64.32 1.43.07 1.76-.58l.97-1.93a7.9 7.9 0 0 1 2.76-3.09l2.8-1.84c.45-.29.58-.89.28-1.34"></svg:path><svg:path fill="#008463" d="M26.362 12.384c.93-3.71-.79-7.69-4.35-9.49a8.36 8.36 0 0 0-10.21 2.15c-2.79-.66-5.78.64-7.12 3.32a6.34 6.34 0 0 0 6.23 9.17a3.937 3.937 0 0 0 5.96 3.01c.59.98 1.46 1.81 2.56 2.36a6.34 6.34 0 0 0 8.52-2.81c1.33-2.68.6-5.86-1.59-7.71"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBroccoliIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
