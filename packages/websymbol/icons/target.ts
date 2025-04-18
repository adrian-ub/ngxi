import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolTargetIcon],svg[websymbol-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 501q0 136-67 251T751 934t-251 67t-251-67T67 752T0 501t67-251T249 68T500 1t251 67t182 182t67 251m-152 59H706V442h142q-19-110-99-190t-190-99v142H441V153q-110 19-190 99t-99 190h142v118H152q19 110 99 190t190 99V707h118v142q110-19 190-99t99-190"></svg:path>`,
})
export class WebsymbolTargetIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
