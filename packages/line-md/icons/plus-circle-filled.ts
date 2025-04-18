import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPlusCircleFilledIcon],svg[line-md-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPlusCircleFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M12 7v10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPlusCircleFilled0)"></svg:rect>`,
})
export class LineMdPlusCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
