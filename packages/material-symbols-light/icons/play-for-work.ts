import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlayForWorkIcon],svg[material-symbols-light-play-for-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.077 0-3.538-1.461T7 14h1q0 1.65 1.175 2.825T12 18t2.825-1.175T16 14h1q0 2.077-1.461 3.539T12 19m0-4.006l-3.308-3.307l.708-.714l2.1 2.1v-6.88h1v6.88l2.1-2.1l.708.714z"></svg:path>`,
})
export class MaterialSymbolsLightPlayForWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
