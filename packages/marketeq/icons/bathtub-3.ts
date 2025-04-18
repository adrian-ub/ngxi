import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBathtub3Icon],svg[marketeq-bathtub-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 14.583a4.167 4.167 0 0 0-4.167-4.166v0a4.167 4.167 0 0 0-4.166 4.166v8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h37.5zm35.417 8.333v-8.333H8.333v8.333a8.333 8.333 0 0 0 8.334 8.333h16.666a8.333 8.333 0 0 0 8.334-8.333"></svg:path></svg:g>`,
})
export class MarketeqBathtub3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
