import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastScrollIcon],svg[fluent-emoji-high-contrast-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.01 21.33a.5.5 0 0 1 .5-.5h7.96a.5.5 0 0 1 0 1h-7.96a.5.5 0 0 1-.5-.5m.47-3.48a.5.5 0 1 0 0 1H23.5a.5.5 0 0 0 0-1zm-.5-2.52a.5.5 0 0 1 .5-.5H23.5a.5.5 0 0 1 0 1H10.48a.5.5 0 0 1-.5-.5m.44-3.46a.5.5 0 1 0 0 1H23.5a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M4.475 1C2.668 1 1.357 2.475 1.029 4.136l-.001.01l-.002.009a1.64 1.64 0 0 0 .238 1.186c.226.344.639.659 1.19.659h3.544L5.95 27.068v.002a3.945 3.945 0 0 0 3.94 3.94h15.67q.12 0 .237-.012c3.83-.054 4.74-1.563 5.127-3.058a1.5 1.5 0 0 0-.295-1.282a1.91 1.91 0 0 0-1.5-.688H27.95V5.45a4.44 4.44 0 0 0-4.44-4.44H9.6V1zm3.523 5H8V5a4.46 4.46 0 0 0-.474-2H7.6v.01h15.91a2.44 2.44 0 0 1 2.44 2.44v20.52H14.4a1.77 1.77 0 0 0-1.785 1.3A2.4 2.4 0 0 1 10.706 29v.01H9.89a1.945 1.945 0 0 1-1.94-1.939l.048-21.066z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastScrollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
