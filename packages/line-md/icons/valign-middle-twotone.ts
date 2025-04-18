import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdValignMiddleTwotoneIcon],svg[line-md-valign-middle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M2.5 8.5h19M2.5 15.5h19"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 6h6v12h-12v-12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdValignMiddleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
