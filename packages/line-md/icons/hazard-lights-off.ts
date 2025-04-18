import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsOffIcon],svg[line-md-hazard-lights-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdHazardLightsOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.4s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdHazardLightsOff0)"></svg:rect>`,
})
export class LineMdHazardLightsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
