import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadHardclipcurveIcon],svg[fad-hardclipcurve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M232 64.5h-54l-111.5 112H26V193h50L187.5 81H232z"></svg:path>`,
})
export class FadHardclipcurveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
