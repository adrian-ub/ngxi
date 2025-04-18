import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciForwardIcon],svg[ci-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V7l9 5l-9 5zm0 0l-9 5V7z"></svg:path>`,
})
export class CiForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
