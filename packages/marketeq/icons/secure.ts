import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSecureIcon],svg[marketeq-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 22.917l4.167 4.166l8.333-8.333"></svg:path><svg:path stroke="#306CFE" d="m25 43.75l1.833-.792a22.92 22.92 0 0 0 13.813-19.291l.896-11.5a2.08 2.08 0 0 0-1.584-2.084L25 6.25L10.042 10a2.08 2.08 0 0 0-1.584 2.083l.896 11.5a22.92 22.92 0 0 0 13.813 19.292z"></svg:path></svg:g>`,
})
export class MarketeqSecureIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
