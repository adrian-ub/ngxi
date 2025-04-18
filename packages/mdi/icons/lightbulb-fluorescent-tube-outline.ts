import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbFluorescentTubeOutlineIcon],svg[mdi-lightbulb-fluorescent-tube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 2.81l-.55.53l-1.39-1.42l-1.24 1.24l1.41 1.42l-.7.7l-1.42-1.41l-1.24 1.24L3.34 6.5l-.53.55l1.41 1.41l11.32 11.32l1.41 1.41l.55-.53l1.39 1.42l1.24-1.24l-1.41-1.41l.71-.71l1.41 1.41l1.24-1.24l-1.42-1.39l.53-.55l-1.41-1.41L8.46 4.22M7.05 5.64l11.31 11.31l-1.41 1.41L5.64 7.05Z"></svg:path>`,
})
export class MdiLightbulbFluorescentTubeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
