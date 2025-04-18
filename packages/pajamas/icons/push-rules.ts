import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPushRulesIcon],svg[pajamas-push-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 4.07V1.75a.75.75 0 0 1 1.5 0v2.32a4.001 4.001 0 0 1 0 7.86v2.32a.75.75 0 0 1-1.5 0v-2.32a4.001 4.001 0 0 1 0-7.86M4 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.75 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75 4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class PajamasPushRulesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
