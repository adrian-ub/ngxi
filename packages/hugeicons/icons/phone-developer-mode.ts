import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhoneDeveloperModeIcon],svg[hugeicons-phone-developer-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 7c0-2.357 0-3.536-.732-4.268C17.035 2 15.857 2 13.5 2h-3c-2.357 0-3.536 0-4.268.732S5.5 4.643 5.5 7m13 10c0 2.357 0 3.535-.732 4.268C17.035 22 15.857 22 13.5 22h-3c-2.357 0-3.536 0-4.268-.732C5.5 20.535 5.5 19.357 5.5 17"></svg:path><svg:path d="M14 2h-4l.5 1h3zm1.5 13.5S19 12.922 19 12s-3.5-3.5-3.5-3.5m-7 7S5 12.922 5 12s3.5-3.5 3.5-3.5"></svg:path></svg:g>`,
})
export class HugeiconsPhoneDeveloperModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
