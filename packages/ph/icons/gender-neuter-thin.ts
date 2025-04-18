import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterThinIcon],svg[ph-gender-neuter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104a76 76 0 1 0-80 75.89V232a4 4 0 0 0 8 0v-52.11A76.09 76.09 0 0 0 204 104m-76 68a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhGenderNeuterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
