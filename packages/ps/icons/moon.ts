import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMoonIcon],svg[ps-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 235q-63 0-106.5-43.5T149 85q0-40 26-85q-74 7-124.5 62T0 192q0 80 56 136t136 56q75 0 130-50.5T384 209q-45 26-85 26M192 341q-62 0-105.5-43.5T43 192q0-79 64-122v15q0 80 56 136t136 56h15q-43 64-122 64"></svg:path>`,
})
export class PsMoonIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
