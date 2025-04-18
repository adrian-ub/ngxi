import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGpsFixedIcon],svg[marketeq-gps-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v4.167zM43.75 25h-4.167zM25 43.75v-4.167zM6.25 25h4.167zm25 0a6.25 6.25 0 1 0-12.5 0a6.25 6.25 0 0 0 12.5 0"></svg:path><svg:path stroke="#306CFE" d="M25 39.583c8.054 0 14.583-6.529 14.583-14.583S33.054 10.417 25 10.417S10.417 16.946 10.417 25S16.946 39.583 25 39.583"></svg:path></svg:g>`,
})
export class MarketeqGpsFixedIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
