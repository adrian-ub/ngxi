import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownloadAlt4Icon],svg[marketeq-download-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 25v18.75m-6.48-6.25l6.626 6.625l6.333-6.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.5 9.5 0 0 1 1.73-.167A8.729 8.729 0 0 1 37.5 33.333"></svg:path></svg:g>`,
})
export class MarketeqDownloadAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
