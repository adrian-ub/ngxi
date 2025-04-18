import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainMinitabIcon],svg[devicon-plain-minitab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v128h128V0zm34.6 106.5H14.8v-54h19.7v54zm27.1 0H42v-87h19.7zm27.1 0H69.1V37.6h19.7zm27.2 0H96.3V68.6H116z"></svg:path>`,
})
export class DeviconPlainMinitabIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
