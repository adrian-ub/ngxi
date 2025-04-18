import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUnlockedIcon],svg[carbon-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 14H12V8a4 4 0 0 1 8 0h2a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H8V16h16Z"></svg:path>`,
})
export class CarbonUnlockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
