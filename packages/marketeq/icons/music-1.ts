import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMusic1Icon],svg[marketeq-music-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M27.083 36.458V6.25a54 54 0 0 0 7.167 6.25c3.458 2.23 3.98 5.75 2.396 10.417"></svg:path><svg:path d="M19.792 43.75a7.292 7.292 0 1 0 0-14.583a7.292 7.292 0 0 0 0 14.583"></svg:path></svg:g>`,
})
export class MarketeqMusic1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
