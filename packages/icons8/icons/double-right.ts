import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DoubleRightIcon],svg[icons8-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.094 4.78L7.688 6.22l9.78 9.78l-9.78 9.78l1.406 1.44l10.5-10.5l.718-.72l-.718-.72zm7 0l-1.407 1.44L24.47 16l-9.782 9.78l1.406 1.44l10.5-10.5l.718-.72l-.718-.72z"></svg:path>`,
})
export class Icons8DoubleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
