import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaiseToAnswerIcon],svg[arcticons-raise-to-answer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="29.426" cy="16.482" r="10.35" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 41.868V31.95a3.88 3.88 0 0 0-3.45-3.45H18.488l-6.9 2.587l6.103-6.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.901 41.868v-6.469l-6.925 1.727c-5.08 1.267-5.498-4.578-2.944-7.606l9.254-10.975m4.054-4.973l-5.175 1.725l4.168 10.764l4.497-1.499"></svg:path>`,
})
export class ArcticonsRaiseToAnswerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
