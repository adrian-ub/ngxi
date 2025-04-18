import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqToilet2Icon],svg[marketeq-toilet-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 22.917H14.583V6.25h20.834zm2.083 4.166v-4.166h-25v4.166a4.167 4.167 0 0 0 4.167 4.167h16.666a4.167 4.167 0 0 0 4.167-4.167m-4.167 4.167H16.667l-2.084 12.5h20.834z"></svg:path><svg:path stroke="#344054" d="M10.417 22.917h29.166M12.5 6.25h25z"></svg:path></svg:g>`,
})
export class MarketeqToilet2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
