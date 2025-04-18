import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiStopCircleIcon],svg[mynaui-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.5 12c0-1.178 0-1.768.366-2.134S10.822 9.5 12 9.5s1.768 0 2.134.366s.366.956.366 2.134s0 1.768-.366 2.134s-.956.366-2.134.366s-1.768 0-2.134-.366S9.5 13.178 9.5 12"></svg:path></svg:g>`,
})
export class MynauiStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
