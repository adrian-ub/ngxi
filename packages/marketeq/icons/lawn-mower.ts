import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLawnMowerIcon],svg[marketeq-lawn-mower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 22.917h11.208a2.08 2.08 0 0 1 1.875 1.145l1.5 3.021H37.5a2.083 2.083 0 0 1 2.083 2.084v4.166"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333h2.354a2.08 2.08 0 0 1 2.084 1.792L14 33.333M35.417 37.5H18.75"></svg:path><svg:path stroke="#344054" d="M14.583 33.333a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333m25 0a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqLawnMowerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
