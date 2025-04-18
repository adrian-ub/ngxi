import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStoolIcon],svg[marketeq-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M13.542 29.167h22.916"></svg:path><svg:path stroke="#306CFE" d="M35.417 14.583L37.5 43.75M14.583 14.583L12.5 43.75m2.083-37.5h20.834A2.083 2.083 0 0 1 37.5 8.333v6.25h-25v-6.25a2.083 2.083 0 0 1 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqStoolIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
