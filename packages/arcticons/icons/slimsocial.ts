import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlimsocialIcon],svg[arcticons-slimsocial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.333 5.5v33.795L24 35.555M12.667 5.5v33.794L24 35.554"></svg:path><svg:circle cx="24" cy="24" r="7.964" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.355 26.203c.365.307.76.447 1.645.447h.449c.73 0 1.322-.593 1.322-1.325h0c0-.732-.592-1.325-1.322-1.325h-.898c-.73 0-1.322-.593-1.322-1.325h0c0-.732.592-1.325 1.322-1.325H24c.885 0 1.28.14 1.645.447"></svg:path>`,
})
export class ArcticonsSlimsocialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
