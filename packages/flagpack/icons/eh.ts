import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackEhIcon],svg[flagpack-eh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#F7FCFF" d="M0 0h32v24H0z"></svg:path><svg:path fill="#272727" d="M0 0v8h32V0z"></svg:path><svg:path fill="#5EAA22" d="M0 16v8h32v-8z"></svg:path><svg:path fill="#E31D1C" d="m0 0l16 12L0 24zm21.688 15.477s-2.275-1.375-2.275-3.646s2.275-3.467 2.275-3.467c-1.018-.646-4.549.276-4.549 3.54s3.498 3.869 4.549 3.573m1.84-4.164l-1.323-1.24l.457 1.583l-1.281.607l1.573.512l.683 1.714l.3-1.587l1.553.343l-1.175-1.148l.397-1.225z"></svg:path></svg:g>`,
})
export class FlagpackEhIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
