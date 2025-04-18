import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbFluorescentTubeIcon],svg[mdi-lightbulb-fluorescent-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 2.81l-.55.53l-1.39-1.42l-1.24 1.24l1.41 1.42l-.7.7l-1.42-1.41l-1.24 1.24L3.34 6.5l-.53.55l14.14 14.14l.55-.53l1.39 1.42l1.24-1.24l-1.41-1.41l.7-.71l1.42 1.41l1.24-1.23l-1.42-1.4l.53-.55z"></svg:path>`,
})
export class MdiLightbulbFluorescentTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
