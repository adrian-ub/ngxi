import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTranslateIcon],svg[marketeq-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 22.917a16.96 16.96 0 0 0 8.334 6.25"></svg:path><svg:path stroke="#344054" d="M20.833 29.167c8.334-2.084 8.334-12.5 8.334-12.5M25 14.583v2.084m-8.333 0h16.666z"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v25a2.083 2.083 0 0 1-2.083 2.084h-8.334L25 43.75l-8.333-8.333H8.333a2.083 2.083 0 0 1-2.083-2.084v-25A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqTranslateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
