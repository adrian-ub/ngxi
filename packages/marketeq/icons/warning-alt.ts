import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWarningAltIcon],svg[marketeq-warning-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 18.75v8.333"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 35.417h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M21.354 8.73L5.48 37.5a4.166 4.166 0 0 0 3.646 6.25h31.75a4.167 4.167 0 0 0 3.646-6.25L28.646 8.73a4.166 4.166 0 0 0-7.292 0"></svg:path></svg:g>`,
})
export class MarketeqWarningAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
