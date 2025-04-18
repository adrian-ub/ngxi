import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHospitalFillIcon],svg[ph-hospital-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208h-8v-80a16 16 0 0 0-16-16h-56V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160h-8a8 8 0 0 0 0 16h216a8 8 0 0 0 0-16m-120 0H80v-48h48Zm0-104h-16v16a8 8 0 0 1-16 0v-16H80a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m96 104h-56v-80h56Z"></svg:path>`,
})
export class PhHospitalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
