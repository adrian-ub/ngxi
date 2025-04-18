import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBubblesIcon],svg[openmoji-bubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="4" d="M40 47.091A5.35 5.35 0 0 1 42.091 45"></svg:path><svg:path stroke-width="3" d="M48.5 25.5a2.56 2.56 0 0 1 1-1"></svg:path><svg:path stroke-width="4" d="M18 21.346A8.56 8.56 0 0 1 21.346 18"></svg:path></svg:g><svg:path fill="#92D3F5" d="M24.5 39C31.956 39 38 32.956 38 25.5S31.956 12 24.5 12S11 18.044 11 25.5S17.044 39 24.5 39m26.799-3.3a7.893 7.893 0 1 0 0-15.786a7.893 7.893 0 0 0 0 15.786M44 60c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10"></svg:path><svg:path fill="none" stroke="#61B2E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M32 25.5a6.5 6.5 0 0 1-6.5 6.5"></svg:path><svg:path fill="none" stroke="#61B2E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M50 50a5 5 0 0 1-5 5"></svg:path><svg:path fill="none" stroke="#61B2E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M55.5 28.5a3 3 0 0 1-3 3"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 47.091A5.35 5.35 0 0 1 42.091 45"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M48.5 25.5a2.56 2.56 0 0 1 1-1"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 21.346A8.56 8.56 0 0 1 21.346 18"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M25.5 39C32.956 39 39 32.956 39 25.5S32.956 12 25.5 12S12 18.044 12 25.5S18.044 39 25.5 39M52 36a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-7 24c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10"></svg:path><svg:path d="M45 60c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10"></svg:path></svg:g>`,
})
export class OpenmojiBubblesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
