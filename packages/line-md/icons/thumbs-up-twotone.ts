import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdThumbsUpTwotoneIcon],svg[line-md-thumbs-up-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 11v9h-4v-9h4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="80" stroke-dashoffset="80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5 -8l3 1l-1 6h7v3l-3 7h-11h-4v-9h4v9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="80;0"></svg:animate></svg:path>`,
})
export class LineMdThumbsUpTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
