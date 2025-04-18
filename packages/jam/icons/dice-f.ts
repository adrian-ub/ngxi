import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDiceFIcon],svg[jam-dice-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm-1 13a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-5-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class JamDiceFIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
