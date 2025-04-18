import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTangerineIcon],svg[fluent-emoji-flat-tangerine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M7 2h5c2.761 0 5 2.739 5 5.5h-5C9.239 7.5 7 4.761 7 2"></svg:path><svg:path fill="#FF822D" d="M16.5 30C22.851 30 28 24.851 28 18.5S22.851 7 16.5 7S5 12.149 5 18.5S10.149 30 16.5 30"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTangerineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
