import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDnaIcon],svg[streamline-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.1 3.9a4.65 4.65 0 0 0 3.4.1M4 13.5a4.68 4.68 0 0 0-.1-3.41a4.74 4.74 0 0 1 1-5.16a4.8 4.8 0 0 1 2.46-1.3"></svg:path><svg:path d="M6.6 10.37a4.8 4.8 0 0 0 2.47-1.31a4.73 4.73 0 0 0 1-5.16A4.65 4.65 0 0 1 10 .5M.5 10a4.6 4.6 0 0 1 3.4.11m1.04-5.18l4.13 4.13"></svg:path></svg:g>`,
})
export class StreamlineDnaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
