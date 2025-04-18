import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallTripleUpIcon],svg[line-md-chevron-small-triple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 14l-5 5M12 14l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 9l-5 5M12 9l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 4l-5 5M12 4l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallTripleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
