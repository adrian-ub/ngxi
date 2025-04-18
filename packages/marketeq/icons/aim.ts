import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAimIcon],svg[marketeq-aim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m35.417 43.75l-3.625-12.5zm-20.834 0l3.625-12.5zM25 8.333V6.25zm4.167 12.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqAimIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
