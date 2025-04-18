import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationBlock01Icon],svg[hugeicons-notification-block-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 5.297a6.85 6.85 0 0 0-8.842 6.194c-.073 1.396.011 2.882-1.236 3.817a2.3 2.3 0 0 0-.922 1.845C2.5 18.15 3.282 19 4.3 19h14.4c1.018 0 1.8-.85 1.8-1.847c0-.726-.342-1.41-.922-1.845l-.078-.06"></svg:path><svg:path d="M10 3.125C10 3.953 10.672 5 11.5 5S13 3.953 13 3.125S12.328 2 11.5 2S10 2.297 10 3.125M14.5 19a3 3 0 1 1-6 0m7.05-11.95l4.9 4.9M21.5 9.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0"></svg:path></svg:g>`,
})
export class HugeiconsNotificationBlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
