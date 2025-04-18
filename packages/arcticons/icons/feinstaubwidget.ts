import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeinstaubwidgetIcon],svg[arcticons-feinstaubwidget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 27.058l-3.318-3.561l-2.279 3.775l-3.205-1.282l-7.407 1.852l-4.843-1.71l-5.983 1.71l-2.208-7.906l-2.421 5.199l-3.134-7.122L4.5 31.925l3.063-3.086l3.917.641l1.139 1.353l5.841.214l3.703-.784l6.552 1.14l5.769-1.211l5.128.499l3.888-.499m-39 5.224V12.584m0 22.832h39"></svg:path>`,
})
export class ArcticonsFeinstaubwidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
