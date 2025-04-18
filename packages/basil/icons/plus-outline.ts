import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilPlusOutlineIcon],svg[basil-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17V7m-5 5h10"></svg:path>`,
})
export class BasilPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
