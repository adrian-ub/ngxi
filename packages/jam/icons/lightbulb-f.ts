import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLightbulbFIcon],svg[jam-lightbulb-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.565H8v-8a1 1 0 1 0-2 0v8H3V13.31a7 7 0 1 1 8 0zm0 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"></svg:path>`,
})
export class JamLightbulbFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
