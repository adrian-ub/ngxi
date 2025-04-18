import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPsychiatryIcon],svg[material-symbols-light-psychiatry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.5v-7.898q-1.408 0-2.69-.526T6.536 10.56T5.034 8.275T4.52 5.577v-1h1q1.377 0 2.666.537q1.29.538 2.273 1.525q.794.794 1.287 1.805t.653 2.139q.221-.425.496-.8q.275-.373.623-.721q.988-.987 2.283-1.525T18.5 7h1v1q0 1.406-.538 2.701t-1.526 2.284t-2.258 1.502T12.5 15v5.5z"></svg:path>`,
})
export class MaterialSymbolsLightPsychiatryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
