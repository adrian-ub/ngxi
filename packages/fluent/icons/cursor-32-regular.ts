import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursor32RegularIcon],svg[fluent-cursor-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.553v22.6l5.484-7.508a4 4 0 0 1 3.23-1.64h8.499zM7 3.486C7 2.253 8.42 1.56 9.391 2.32l18.991 14.84c1.192.931.534 2.844-.979 2.844h-9.69a2 2 0 0 0-1.614.82l-6.225 8.523C8.966 30.59 7 29.948 7 28.41z"></svg:path>`,
})
export class FluentCursor32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
