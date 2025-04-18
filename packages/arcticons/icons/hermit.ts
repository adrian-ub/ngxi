import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHermitIcon],svg[arcticons-hermit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.708 21c13.366.112 24.18 10.926 24.291 24.292"></svg:path><svg:path d="M2.616 26.25c10.54.063 19.071 8.594 19.134 19.134"></svg:path><svg:path d="M3.87 31.566c6.638.644 11.92 5.926 12.564 12.565"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.4 22.4h3.2v3.2h-3.2zm6 0h3.2v3.2h-3.2zm-6 8.806V28.4h3.2v3.2h-2.922m5.722-3.2h3.2v3.2h-3.2zm-6-12h3.2v3.2h-3.2zm6 0h3.2v3.2h-3.2zm-12 0h3.2v3.2h-3.2zm0 8.922V22.4h3.2v3.2h-2.806"></svg:path>`,
})
export class ArcticonsHermitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
