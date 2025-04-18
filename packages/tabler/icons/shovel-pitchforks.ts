import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShovelPitchforksIcon],svg[tabler-shovel-pitchforks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h4M7 3v12m-3 0h6v3a3 3 0 0 1-6 0zm10 6v-3a3 3 0 0 1 6 0v3m-3 0V3"></svg:path>`,
})
export class TablerShovelPitchforksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
