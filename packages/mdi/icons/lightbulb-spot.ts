import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbSpotIcon],svg[mdi-lightbulb-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h2v3H9zm4 3h2v-3h-2zM2 2v2h20V2zm7 12v3h6v-3c2.5-1.43 5-3 5-8H4c0 5 2.5 6.57 5 8"></svg:path>`,
})
export class MdiLightbulbSpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
