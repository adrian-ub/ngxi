import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastInputLatinLowercaseIcon],svg[fluent-emoji-high-contrast-input-latin-lowercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 5.98a1 1 0 1 0-2 0v8.114a1 1 0 0 0 1.776.631a.14.14 0 0 1 .17-.04a3.5 3.5 0 1 0 .234-6.38a.13.13 0 0 1-.18-.119zm0 5.567a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-7.014-3.645a1 1 0 0 1 1 1v2.33a3.5 3.5 0 0 1 0 .63v2.232a1 1 0 0 1-1.773.636a.14.14 0 0 0-.17-.04a3.5 3.5 0 1 1-.053-6.31a.14.14 0 0 0 .176-.051a1 1 0 0 1 .82-.427M10.5 13.047a1.5 1.5 0 0 0 1.486-1.294v-.412a1.5 1.5 0 1 0-1.486 1.706M11.013 21a1.5 1.5 0 1 0 .884 2.712a1 1 0 1 1 1.18 1.615a3.5 3.5 0 1 1 0-5.655a1 1 0 1 1-1.18 1.616a1.5 1.5 0 0 0-.884-.288m12.577-5a1 1 0 0 1 1 1v8.114a1 1 0 0 1-1.808.589a.14.14 0 0 0-.175-.048a3.5 3.5 0 1 1-.198-6.398a.13.13 0 0 0 .18-.118V17a1 1 0 0 1 1-1m-2.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastInputLatinLowercaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
