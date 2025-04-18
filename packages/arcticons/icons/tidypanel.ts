import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTidypanelIcon],svg[arcticons-tidypanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.678 13.032a13.24 13.24 0 0 0-3.932 9.412v11.19l-4.2 4.199h34.907l-4.199-3.89m0-3.993v-7.506A13.25 13.25 0 0 0 27.075 9.563v-.984a3.097 3.097 0 0 0-6.193 0v.995a13.2 13.2 0 0 0-4.25 1.861m2.702 26.398a4.643 4.643 0 1 0 9.287.048v-.048M6.547 5.5l34.906 32.333"></svg:path>`,
})
export class ArcticonsTidypanelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
