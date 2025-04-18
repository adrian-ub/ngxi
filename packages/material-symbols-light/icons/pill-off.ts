import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPillOffIcon],svg[material-symbols-light-pill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.639 13.889l-6.527-6.527l1.98-2q.666-.647 1.508-1.004T15.375 4q1.927 0 3.276 1.349T20 8.625q0 .933-.358 1.775t-1.003 1.508zm3.084 7.35l-5.217-5.218l-2.598 2.617q-.646.646-1.498 1.004T8.625 20q-1.927 0-3.276-1.349T4 15.375q0-.933.358-1.784q.358-.852 1.004-1.499l2.617-2.598l-5.117-5.117l.707-.708l16.862 16.862z"></svg:path>`,
})
export class MaterialSymbolsLightPillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
