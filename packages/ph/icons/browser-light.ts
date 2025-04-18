import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrowserLightIcon],svg[ph-browser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v34H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2v-98h180v98a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBrowserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
