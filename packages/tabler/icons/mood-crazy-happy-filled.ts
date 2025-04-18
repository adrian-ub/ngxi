import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodCrazyHappyFilledIcon],svg[tabler-mood-crazy-happy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.8 10.946a1 1 0 0 0-1.414.014a2.5 2.5 0 0 1-3.572 0a1 1 0 0 0-1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0-.014-1.414M7.707 7.793a1 1 0 0 0-1.414 1.414l.792.793l-.792.793a1 1 0 0 0 1.414 1.414l.793-.792l.793.792a1 1 0 1 0 1.414-1.414L9.915 10l.792-.793a1 1 0 1 0-1.414-1.414l-.793.792zm7 0a1 1 0 0 0-1.414 1.414l.792.793l-.792.793a1 1 0 0 0 1.414 1.414l.793-.792l.793.792a1 1 0 0 0 1.414-1.414L16.915 10l.792-.793a1 1 0 1 0-1.414-1.414l-.793.792z"></svg:path>`,
})
export class TablerMoodCrazyHappyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
