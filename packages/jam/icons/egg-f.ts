import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamEggFIcon],svg[jam-egg-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20.565a8 8 0 0 1-8-8c0-4.418 3.582-12 8-12s8 7.582 8 12a8 8 0 0 1-8 8"></svg:path>`,
})
export class JamEggFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
