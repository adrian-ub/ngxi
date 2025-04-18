import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAiutaIcon],svg[arcticons-aiuta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 15.525A3.5 3.5 0 1 1 26.475 18l-1.738 1.738c-.664.86.017 1.29 4.323 4.759L43.5 35.975M22 22.475l-17.5 13.5M37 30.808H11.198"></svg:path>`,
})
export class ArcticonsAiutaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
