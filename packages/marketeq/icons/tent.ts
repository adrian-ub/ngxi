import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTentIcon],svg[marketeq-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m26.938 27.75l6.395 16H16.667l6.395-16a2.082 2.082 0 0 1 3.875 0"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a42 42 0 0 1-14.583 11.208L8.52 41.5a2.083 2.083 0 0 0 2.083 2.25h28.813A2.085 2.085 0 0 0 41.5 41.5l-1.917-24.042A42 42 0 0 1 25 6.25"></svg:path><svg:path stroke="#344054" d="M6.25 18.75C16.667 16.667 25 6.25 25 6.25s8.333 10.417 18.75 12.5"></svg:path></svg:g>`,
})
export class MarketeqTentIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
