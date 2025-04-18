import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEqualizerOutlineIcon],svg[mdi-equalizer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H9V3h6zm-4-2h2V5h-2zm-3 2H2V11h6zm-4-2h2v-6H4zm18 2h-6V8h6zm-4-2h2v-9h-2z"></svg:path>`,
})
export class MdiEqualizerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
