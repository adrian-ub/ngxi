import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTimer5SecondIcon],svg[marketeq-timer-5-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833v8.334l2.917 3.27M18.75 6.25h12.5m4.792 10.833l3.125-3.125zm-22.084 0l-3.125-3.125zM25 12.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqTimer5SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
