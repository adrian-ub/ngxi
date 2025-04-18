import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWarningAlt3Icon],svg[marketeq-warning-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 14.583v12.5"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 35.417h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m36.417 7.292l9.625 16.666a2.08 2.08 0 0 1 0 2.084l-9.625 16.666a2.08 2.08 0 0 1-1.792 1.042h-19.25a2.08 2.08 0 0 1-1.792-1.042L3.958 26.042a2.08 2.08 0 0 1 0-2.084l9.625-16.666a2.08 2.08 0 0 1 1.792-1.042h19.25a2.08 2.08 0 0 1 1.792 1.042"></svg:path></svg:g>`,
})
export class MarketeqWarningAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
