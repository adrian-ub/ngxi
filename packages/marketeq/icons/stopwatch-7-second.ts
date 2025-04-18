import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStopwatch7SecondIcon],svg[marketeq-stopwatch-7-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h-12.5m-4.792 10.833l-3.125-3.125zm22.084 0l3.125-3.125zM17.708 28.125a7.25 7.25 0 0 0 3 5.875L25 29.167v-8.334a7.29 7.29 0 0 0-7.292 7.292M25 12.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqStopwatch7SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
