import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBathtub8Icon],svg[marketeq-bathtub-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 20.833V12.5a4.167 4.167 0 0 0-8.333 0m5.208 25l1.042 4.167M13.542 37.5L12.5 41.667z"></svg:path><svg:path stroke="#306CFE" d="M43.75 20.833H6.25zM16.667 37.5h16.666a8.333 8.333 0 0 0 8.334-8.333v-8.334H8.333v8.334a8.334 8.334 0 0 0 8.334 8.333"></svg:path></svg:g>`,
})
export class MarketeqBathtub8Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
