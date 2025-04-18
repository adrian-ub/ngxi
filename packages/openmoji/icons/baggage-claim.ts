import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBaggageClaimIcon],svg[openmoji-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M43 21h18v33H43z"></svg:path><svg:path fill="#92d3f5" d="M11 21h32v33H11z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21.552h-5.657v31.761H17m.194-31.761h37.612v31.761H17.194zm37.944-.035l5.66.051l-.283 31.76l-5.66-.051"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M45 21.552h9.657v31.761H45"></svg:path><svg:circle cx="15.522" cy="58.328" r="1.672"></svg:circle><svg:circle cx="9.672" cy="58.328" r="1.672"></svg:circle><svg:circle cx="62.328" cy="58.328" r="1.672"></svg:circle><svg:circle cx="56.478" cy="58.328" r="1.672"></svg:circle><svg:circle cx="50.627" cy="58.328" r="1.672"></svg:circle><svg:circle cx="44.776" cy="58.328" r="1.672"></svg:circle><svg:circle cx="38.925" cy="58.328" r="1.672"></svg:circle><svg:circle cx="33.075" cy="58.328" r="1.672"></svg:circle><svg:circle cx="27.224" cy="58.328" r="1.672"></svg:circle><svg:circle cx="21.373" cy="58.328" r="1.672"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M28 21v-4s0-4 4.714-4H39"></svg:path><svg:path d="M44 21v-4s0-4-4.714-4H33"></svg:path></svg:g>`,
})
export class OpenmojiBaggageClaimIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
