import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCubeIcon],svg[marketeq-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 12.5v25M25 31.25L8.333 37.5L25 43.75l16.667-6.25zM8.333 12.5v25zM25 18.75v25z"></svg:path><svg:path stroke="#344054" d="M41.667 12.5L25 18.75L8.333 12.5L25 6.25z"></svg:path></svg:g>`,
})
export class MarketeqCubeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
