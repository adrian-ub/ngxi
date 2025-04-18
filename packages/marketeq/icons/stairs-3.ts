import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStairs3Icon],svg[marketeq-stairs-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 18.75L8.333 6.25m31.25 11.708v17.459zM10.417 7.042v15.875z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5M8.333 22.917V43.75h33.334v-8.333h-8.334V31.25H25v-4.167h-8.333v-4.166z"></svg:path></svg:g>`,
})
export class MarketeqStairs3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
