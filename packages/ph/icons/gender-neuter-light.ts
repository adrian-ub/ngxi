import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterLightIcon],svg[ph-gender-neuter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 104a78 78 0 1 0-84 77.75V232a6 6 0 0 0 12 0v-50.25A78.09 78.09 0 0 0 206 104m-78 66a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66"></svg:path>`,
})
export class PhGenderNeuterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
