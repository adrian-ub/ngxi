import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpeedboatIcon],svg[openmoji-speedboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M25.72 37.219s-18.658.11-18.884 3.205s12.147 8.64 12.147 8.64s.781.792 11.647 1.303c10.867.51 28.142 1.092 28.142 1.092l4.68-4.385a.5.5 0 0 0 .148-.333l.066-1.456c.01-.218-.117-.41-.302-.455l-1.903-.475l-5.017-3.268a.35.35 0 0 0-.15-.056z"></svg:path><svg:path fill="#92D3F5" d="M45.735 39.715s-6.848-5.39-15.022-6.203a.37.37 0 0 0-.25.07l-5.14 3.665z"></svg:path><svg:path fill="none" stroke="#EA5A47" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.86" d="M13.872 41.048s24.987 2.43 42.391 5.445"></svg:path><svg:path fill="#92D3F5" d="M68 47v22H4V47h1c3 0 9 3 15 3s10-3 16-3s11 3 16 3s7-3 15-3z"></svg:path><svg:path fill="none" d="M68 39.021v16H4v-16"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="1.86" d="M63.453 47.074a.5.5 0 0 0 .147-.333l.066-1.456c.01-.218-.117-.41-.302-.455l-1.903-.475l-5.017-3.268a.35.35 0 0 0-.15-.056L25.72 37.22s-18.657.11-18.883 3.205s12.147 8.64 12.147 8.64s.31.314 3.25.674"></svg:path><svg:path stroke-width="1.86" d="M45.735 39.715s-6.848-5.39-15.022-6.203a.37.37 0 0 0-.25.07l-5.14 3.665z"></svg:path><svg:path stroke-width="2" d="M5 47c3 0 9 3 15 3s10-3 16-3s11 3 16 3s7-3 15-3"></svg:path></svg:g>`,
})
export class OpenmojiSpeedboatIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
