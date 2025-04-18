import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle624FilledIcon],svg[fluent-number-circle-6-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-10.5c1.354 0 2.25.985 2.25 2.25A2.25 2.25 0 1 1 12 11.5m0 6c-1.175 0-2.27-.463-3.057-1.434C8.168 15.111 7.75 13.737 7.75 12c0-1.389.262-2.74.935-3.77C9.386 7.16 10.498 6.5 12 6.5c1.248 0 2.242.455 2.951 1.254a.75.75 0 0 1-1.12.996C13.423 8.293 12.848 8 12 8c-.998 0-1.636.405-2.06 1.052c-.344.526-.565 1.246-.65 2.106A3.74 3.74 0 0 1 12 10c2.227 0 3.75 1.701 3.75 3.75A3.75 3.75 0 0 1 12 17.5"></svg:path>`,
})
export class FluentNumberCircle624FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
