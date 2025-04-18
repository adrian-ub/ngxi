import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPandoraIcon],svg[ps-pandora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321 40Q278 3 202 3H5v16q47 0 59 15t12 74v250q0 59-12 74.5T5 448v16h202v-16q-47 0-59-15.5T136 358v-96h66q76 0 119-36q42-38 42-93t-42-93M202 234h-66V32h66q45 0 70 27.5t25 73.5t-25 73.5t-70 27.5"></svg:path>`,
})
export class PsPandoraIcon {
  readonly viewBox = input("0 0 368 488")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
