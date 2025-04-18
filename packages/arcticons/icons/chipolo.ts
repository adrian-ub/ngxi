import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChipoloIcon],svg[arcticons-chipolo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 32.075a3.865 3.865 0 0 1-3.865 3.864h0a3.865 3.865 0 0 1-3.865-3.864h0a3.865 3.865 0 0 1 3.865-3.866h0a3.865 3.865 0 0 1 3.865 3.865m-15.96-3.675a11.94 11.94 0 0 1-11.1 7.54C9.846 35.94 4.5 30.594 4.5 24s5.346-11.94 11.94-11.94a11.94 11.94 0 0 1 11.099 7.541"></svg:path>`,
})
export class ArcticonsChipoloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
