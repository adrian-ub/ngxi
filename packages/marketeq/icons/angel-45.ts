import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAngel45Icon],svg[marketeq-angel-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 39.583a16.67 16.67 0 0 0-4.875-11.791"></svg:path><svg:path stroke="#306CFE" d="M43.75 39.583H6.25l29.167-29.166"></svg:path></svg:g>`,
})
export class MarketeqAngel45Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
