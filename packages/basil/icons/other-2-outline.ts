import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilOther2OutlineIcon],svg[basil-other-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M12 5.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"></svg:path>`,
})
export class BasilOther2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
