import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChronometerWatch3SecondIcon],svg[marketeq-chronometer-watch-3-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 6.25h12.5M25 12.5V6.25zm0 8.333v8.334h4.167"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqChronometerWatch3SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
