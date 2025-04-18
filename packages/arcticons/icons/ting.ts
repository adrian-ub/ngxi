import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTingIcon],svg[arcticons-ting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.758 38.935h.772a2.146 2.146 0 0 0 2.146-2.145V8.954A2.146 2.146 0 0 0 16.53 6.81H7.646A2.146 2.146 0 0 0 5.5 8.954V36.79a2.146 2.146 0 0 0 2.146 2.146h4.442M42.5 6.809H26.958a2.146 2.146 0 0 0-2.146 2.145v32.237m0-22.56H42.5m-3.068 22.56v-22.56"></svg:path>`,
})
export class ArcticonsTingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
