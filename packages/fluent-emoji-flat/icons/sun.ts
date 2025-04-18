import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSunIcon],svg[fluent-emoji-flat-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF822D" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.94 2.94 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.94 2.94 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.94 2.94 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.94 2.94 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.94 2.94 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.94 2.94 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.94 2.94 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.94 2.94 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.94 2.94 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.94 2.94 0 0 0 3.249-1.055"></svg:path><svg:path fill="#FCD53F" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83s-6.72-9.29-3.83-14.294s9.29-6.72 14.294-3.83s6.72 9.29 3.83 14.294"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
