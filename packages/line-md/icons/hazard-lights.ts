import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsIcon],svg[line-md-hazard-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.4s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdHazardLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
