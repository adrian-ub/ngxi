import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal48FilledIcon],svg[fluent-flip-horizontal-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.761 39.312A1.5 1.5 0 0 1 42.5 40h-15a1.5 1.5 0 0 1-1.5-1.5v-33a1.5 1.5 0 0 1 2.866-.62l15 33a1.5 1.5 0 0 1-.105 1.432M29 12.425V37h11.17zM5 40a1 1 0 0 1-.905-1.425l16-34A1 1 0 0 1 22 5v34a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentFlipHorizontal48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
