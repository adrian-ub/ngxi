import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontDecrease24FilledIcon],svg[fluent-font-decrease-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.625 2.22a1 1 0 1 0-1.25 1.56l2.5 2a1 1 0 0 0 1.25 0l2.5-2a1 1 0 0 0-1.25-1.56L18.5 3.72zM12 4a1 1 0 0 1 .92.606l5.999 14a1 1 0 0 1-1.838.788L15.198 15H8.802L6.92 19.394a1 1 0 0 1-1.838-.788l6-14A1 1 0 0 1 12 4m0 3.539l-2.34 5.46h4.68z"></svg:path>`,
})
export class FluentFontDecrease24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
