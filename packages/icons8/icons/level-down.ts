import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8LevelDownIcon],svg[icons8-level-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v2h15v17.063l-4.28-4.282l-1.44 1.44l6 6l.72.686l.72-.687l6-6l-1.44-1.44L22 24.063V5z"></svg:path>`,
})
export class Icons8LevelDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
