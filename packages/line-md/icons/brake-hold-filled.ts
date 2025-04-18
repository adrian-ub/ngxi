import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeHoldFilledIcon],svg[line-md-brake-hold-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeHoldFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M10 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M14 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M10 12h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeHoldFilled0)"></svg:rect>`,
})
export class LineMdBrakeHoldFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
