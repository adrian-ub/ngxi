import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdLightbulbTwotoneIcon],svg[line-md-lightbulb-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="0" x="9" y="20" fill="currentColor"><svg:animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:rect><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path>`,
})
export class LineMdLightbulbTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
