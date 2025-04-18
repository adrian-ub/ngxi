import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqExclamationIcon],svg[marketeq-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.083 6.25h-4.166c-1.15 0-2.084.933-2.084 2.083V25c0 1.15.933 2.083 2.084 2.083h4.166c1.15 0 2.084-.932 2.084-2.083V8.333c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#344054" d="M25 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqExclamationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
