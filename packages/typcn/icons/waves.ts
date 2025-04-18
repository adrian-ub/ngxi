import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnWavesIcon],svg[typcn-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19a5.23 5.23 0 0 1-3.707-1.532a3.246 3.246 0 0 0-4.586 0a.999.999 0 1 1-1.414-1.414a5.25 5.25 0 0 1 7.414 0a3.25 3.25 0 0 0 4.586 0a.999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 19m0-4a5.23 5.23 0 0 1-3.707-1.532a3.246 3.246 0 0 0-4.586 0a.999.999 0 1 1-1.414-1.414a5.25 5.25 0 0 1 7.414 0a3.25 3.25 0 0 0 4.586 0a.999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 15m0-4a5.23 5.23 0 0 1-3.707-1.532a3.246 3.246 0 0 0-4.586 0a.999.999 0 1 1-1.414-1.414a5.25 5.25 0 0 1 7.414 0a3.25 3.25 0 0 0 4.586 0a.999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 11"></svg:path>`,
})
export class TypcnWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
