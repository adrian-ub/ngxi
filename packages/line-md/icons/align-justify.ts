import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdAlignJustifyIcon],svg[line-md-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="8" stroke-dashoffset="8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5h6M12 5h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 10h6M12 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 15h6M12 15h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 20h6M12 20h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
