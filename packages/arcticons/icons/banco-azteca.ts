import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBancoAztecaIcon],svg[arcticons-banco-azteca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.025 12.703c-7.55 1.594-16.035 4.767-19.91 11.042c-3.522 5.703-1.16 10.534 4.26 11.433c-8.491.725-12.07-1.901-11.868-7.216c.19-5.001 6.92-9.737 11.868-12.085c4.743-2.251 11.143-2.797 15.65-3.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.975 12.703c7.55 1.594 16.035 4.767 19.91 11.042c3.522 5.703 1.16 10.534-4.26 11.433c8.492.725 12.07-1.901 11.868-7.216c-.19-5.001-6.92-9.737-11.868-12.085c-4.743-2.251-11.143-2.797-15.65-3.174"></svg:path><svg:circle cx="24.047" cy="27.115" r="6.422" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBancoAztecaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
