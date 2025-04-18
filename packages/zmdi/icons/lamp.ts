import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLampIcon],svg[zmdi-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54 364l39-39l30 30l-39 39zm159 83v-63h43v63zM64 192v43H0v-43zm235-89q29 17 46.5 46t17.5 64q0 53-37.5 90.5T235 341t-90.5-37.5T107 213q0-35 17-64t47-46V0h128zm106 89h64v43h-64zm-59 163l30-29l39 38l-30 30z"></svg:path>`,
})
export class ZmdiLampIcon {
  readonly viewBox = input("0 0 472 448")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
