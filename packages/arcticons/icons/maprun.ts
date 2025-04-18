import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaprunIcon],svg[arcticons-maprun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.385 30.338l-8.46-10.002v19.981H5.5V7.847h8.293l15.286 18.084l5.095-5.861v20.282H42.5V7.648h-8.292l-8.193 9.991"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.981 13.276l.034 4.363h4.43"></svg:path><svg:circle cx="24.149" cy="32.104" r="1.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMaprunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
