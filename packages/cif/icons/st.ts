import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifStIcon],svg[cif-st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#12AD2B" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFCE00" d="M.5 43.357h300v64.286H.5z"></svg:path><svg:path fill="#D21034" d="M.5.5v150l75-75"></svg:path><svg:path fill="#000" d="m130.12 68.878l12.596 9.151l-4.811 14.807l12.595-9.151l12.596 9.151l-4.811-14.807l12.595-9.151h-15.569L150.5 54.071l-4.811 14.807zm75 0l12.596 9.151l-4.811 14.807l12.595-9.151l12.596 9.151l-4.811-14.807l12.595-9.151h-15.569L225.5 54.071l-4.811 14.807z"></svg:path></svg:g>`,
})
export class CifStIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
