import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle024FilledIcon],svg[fluent-number-circle-0-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9.75 12c0-1.263.184-2.302.565-3c.349-.64.858-1 1.685-1s1.336.36 1.685 1c.38.698.565 1.737.565 3s-.184 2.302-.565 3c-.349.64-.858 1-1.685 1s-1.336-.36-1.685-1c-.38-.698-.565-1.737-.565-3M12 6.5c-1.423 0-2.414.703-3.002 1.782C8.44 9.304 8.25 10.64 8.25 12s.19 2.696.748 3.718c.588 1.08 1.58 1.782 3.002 1.782c1.423 0 2.414-.703 3.002-1.782c.557-1.022.748-2.358.748-3.718s-.19-2.696-.748-3.718C14.414 7.202 13.422 6.5 12 6.5"></svg:path>`,
})
export class FluentNumberCircle024FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
