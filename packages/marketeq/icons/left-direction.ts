import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftDirectionIcon],svg[marketeq-left-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.125 29.167h21.542a2.083 2.083 0 0 0 2.083-2.084v-4.166a2.084 2.084 0 0 0-2.083-2.084H20.125"></svg:path><svg:path stroke="#306CFE" d="m20.125 20.833l6.083-7.083l-6.333-5.417L6.75 23.646a2.08 2.08 0 0 0 0 2.708l13.125 15.313l6.25-5.417l-6-7.083"></svg:path></svg:g>`,
})
export class MarketeqLeftDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
