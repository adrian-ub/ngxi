import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGolfIcon],svg[iconoir-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v-6m0 0V3.41a.6.6 0 0 1 .836-.552l8.444 3.62a.6.6 0 0 1 .022 1.093zm0 10c3.866 0 7-1.567 7-3.5S15.866 15 12 15s-7 1.567-7 3.5S8.134 22 12 22"></svg:path>`,
})
export class IconoirGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
