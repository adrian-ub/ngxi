import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneOffTwotoneIcon],svg[line-md-cellphone-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCellphoneOffTwotone0"><svg:path fill="#fff" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCellphoneOffTwotone0)"></svg:rect>`,
})
export class LineMdCellphoneOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
