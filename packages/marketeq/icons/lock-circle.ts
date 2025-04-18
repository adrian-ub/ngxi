import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLockCircleIcon],svg[marketeq-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 33.333h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c5.753 0 10.417-4.664 10.417-10.417S30.753 22.917 25 22.917S14.583 27.58 14.583 33.333S19.247 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M16.667 27.083v-12.5a8.333 8.333 0 1 1 16.666 0v12.5"></svg:path></svg:g>`,
})
export class MarketeqLockCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
