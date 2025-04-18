import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggVoicemailRIcon],svg[gg-voicemail-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.5 12c0 .35-.06.687-.17 1h2.34a3 3 0 1 1 2.83 2h-8a3 3 0 1 1 3-3m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M1.5 8a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3zm3-1h15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class GgVoicemailRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
