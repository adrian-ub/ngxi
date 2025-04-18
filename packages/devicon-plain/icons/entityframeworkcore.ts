import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainEntityframeworkcoreIcon],svg[devicon-plain-entityframeworkcore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v128h128V0zm41.602 47.37h18.837v4.595H47.063v9.031h12.535v4.574H47.063v10.444h13.376v4.617H41.602zm26.005 0H86.4v4.595H73.021V62.34h12.514v4.572H73.021v13.719h-5.414z"></svg:path>`,
})
export class DeviconPlainEntityframeworkcoreIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
