import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDumbbell3Icon],svg[marketeq-dumbbell-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 20.02l-1.979-8.708a4.167 4.167 0 0 1 4.063-5.062h16.666a4.167 4.167 0 0 1 4.167 5.062l-2.083 8.75M18.75 35.417h12.5"></svg:path><svg:path stroke="#306CFE" d="M35.792 43.75H14.208a4.17 4.17 0 0 1-3.562-1.958a16.666 16.666 0 1 1 28.687 0a4.17 4.17 0 0 1-3.541 1.958"></svg:path></svg:g>`,
})
export class MarketeqDumbbell3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
