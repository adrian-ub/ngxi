import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFileFavorite8Icon],svg[marketeq-file-favorite-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 18.75h12.5m8.334 10.417l-2.584 4.791l-5.75.771l4.167 3.75l-.98 5.271l5.147-2.5l5.145 2.5l-.979-5.27l4.167-3.75l-5.75-.772zm-20.834-2.084h12.5z"></svg:path><svg:path stroke="#306CFE" d="M20.833 43.75h-12.5a2.083 2.083 0 0 1-2.083-2.083V14.583l8.333-8.333h18.75a2.083 2.083 0 0 1 2.084 2.083v12.5"></svg:path></svg:g>`,
})
export class MarketeqFileFavorite8Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
