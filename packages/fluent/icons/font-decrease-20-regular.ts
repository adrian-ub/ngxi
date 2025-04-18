import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontDecrease20RegularIcon],svg[fluent-font-decrease-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.147 2.146a.5.5 0 0 1 .707 0L15.5 3.793l1.646-1.647a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708M10 4a.5.5 0 0 1 .463.31l4.5 11a.5.5 0 1 1-.926.38L12.5 11.931V12h-5v-.069L5.963 15.69a.5.5 0 1 1-.926-.378l4.5-11A.5.5 0 0 1 10 4m-2.119 7h4.238L10 5.82z"></svg:path>`,
})
export class FluentFontDecrease20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
