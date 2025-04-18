import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDot02SIcon],svg[ci-dot-02-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiDot02SIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
