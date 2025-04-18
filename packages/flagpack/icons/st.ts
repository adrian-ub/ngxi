import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackStIcon],svg[flagpack-st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FBCD17" d="M0 0v24h32V0z"></svg:path><svg:path fill="#73BE4A" d="M0 0v8h32V0zm0 16v8h32v-8z"></svg:path><svg:path fill="#C51918" d="M0 0v24l10-12z"></svg:path><svg:path fill="#272727" d="M17.002 13.87L15.132 15l.426-2.204L14 11.146l2.11-.088L17.001 9l.892 2.058H20l-1.554 1.738l.468 2.204zm8 0L23.132 15l.426-2.204L22 11.146l2.11-.088L25.001 9l.892 2.058H28l-1.554 1.738l.468 2.204z"></svg:path></svg:g>`,
})
export class FlagpackStIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
