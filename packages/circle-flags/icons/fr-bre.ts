import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsFrBreIcon],svg[circle-flags-fr-bre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsFrBre0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsFrBre0)"><svg:path fill="#eee" d="M0 0h256l256 57v57l-32 28l32 29v57l-32 28l32 29v56l-32 29l32 28v57l-256 29L0 455v-57l32-28l-32-29v-56l32-29l-32-28Z"></svg:path><svg:path fill="#333" d="M256 0h256v57H256zm0 114h256v57H256zM0 228h512v57H0zm0 113h512v57H0zm0 114h512v57H0zM16 72l19 14l19-14l-19-40z"></svg:path><svg:circle cx="46.7" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="22.7" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="34.7" cy="20.4" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m109 72l19 14l19-14l-19-40z"></svg:path><svg:circle cx="140.4" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="116.4" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="128.4" cy="20.4" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m203 72l19 14l19-14l-19-40z"></svg:path><svg:circle cx="234.1" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="210.1" cy="32.4" r="6" fill="#333"></svg:circle><svg:circle cx="222.1" cy="20.4" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m156 138l19 14l19-14l-19-40z"></svg:path><svg:circle cx="187.2" cy="98.2" r="6" fill="#333"></svg:circle><svg:circle cx="163.2" cy="98.2" r="6" fill="#333"></svg:circle><svg:circle cx="175.2" cy="86.2" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m63 138l19 14l18-14l-18-40z"></svg:path><svg:circle cx="93.5" cy="98.2" r="6" fill="#333"></svg:circle><svg:circle cx="69.5" cy="98.2" r="6" fill="#333"></svg:circle><svg:circle cx="81.5" cy="86.2" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m16 204l19 14l19-14l-19-40z"></svg:path><svg:circle cx="46.7" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="22.7" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="34.7" cy="152" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m109 204l19 14l19-14l-19-40z"></svg:path><svg:circle cx="140.4" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="116.4" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="128.4" cy="152" r="6" fill="#333"></svg:circle><svg:path fill="#333" d="m203 204l19 14l19-14l-19-40z"></svg:path><svg:circle cx="234.1" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="210.1" cy="164" r="6" fill="#333"></svg:circle><svg:circle cx="222.1" cy="152" r="6" fill="#333"></svg:circle></svg:g>`,
})
export class CircleFlagsFrBreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
