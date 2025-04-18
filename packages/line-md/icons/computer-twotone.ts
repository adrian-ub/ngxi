import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdComputerTwotoneIcon],svg[line-md-computer-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h5M12 21h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21v-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-9v-12h18v12Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdComputerTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
