import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBike2Icon],svg[marketeq-bike-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 33.333a6.25 6.25 0 1 1-12.5 0a6.25 6.25 0 0 1 12.5 0m-31.25-6.25a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M29.167 10.417h2.416a2.08 2.08 0 0 1 2.084 1.708L37.5 33.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 33.333h6.25l15.73-16.666"></svg:path><svg:path stroke="#306CFE" d="M16.667 16.667h3.291a2.084 2.084 0 0 1 2.084 1.666l1.812 9.105"></svg:path></svg:g>`,
})
export class MarketeqBike2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
