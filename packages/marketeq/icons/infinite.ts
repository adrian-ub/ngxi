import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqInfiniteIcon],svg[marketeq-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.48 30.5a7.79 7.79 0 0 1-10.98 0L25 25l5.5-5.5a7.77 7.77 0 0 1 10.98 11m-32.96 0a7.79 7.79 0 0 0 10.98 0L25 25l-5.5-5.5a7.77 7.77 0 1 0-10.98 11"></svg:path>`,
})
export class MarketeqInfiniteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
