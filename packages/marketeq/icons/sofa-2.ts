import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSofa2Icon],svg[marketeq-sofa-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 18.75a8.333 8.333 0 0 1 8.333-8.333h12.5a8.333 8.333 0 0 1 8.333 8.333M10.417 39.583v-4.166m29.166 4.166v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.917v8.333a4.167 4.167 0 0 1-4.167 4.167H10.417A4.167 4.167 0 0 1 6.25 31.25v-8.333a4.166 4.166 0 0 1 4.875-4.167a4.31 4.31 0 0 1 3.458 4.396v3.937h20.834v-3.937a4.31 4.31 0 0 1 3.458-4.396a4.168 4.168 0 0 1 4.875 4.167"></svg:path></svg:g>`,
})
export class MarketeqSofa2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
