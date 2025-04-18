import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDollarGeneralIcon],svg[arcticons-dollar-general-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 31.17V16.83h3.226A6.274 6.274 0 0 1 24 23.104v1.792a6.274 6.274 0 0 1-6.274 6.274zm19-9.59a4.75 4.75 0 0 0-4.75-4.75h0A4.75 4.75 0 0 0 24 21.58v4.84a4.75 4.75 0 0 0 4.75 4.75h0a4.75 4.75 0 0 0 4.75-4.75h-4.75"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDollarGeneralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
