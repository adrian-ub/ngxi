import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8LevelUpIcon],svg[icons8-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 4.094l-.72.687l-6 6l1.44 1.44L20 7.936V25H5v2h17V7.937l4.28 4.282l1.44-1.44l-6-6z"></svg:path>`,
})
export class Icons8LevelUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
