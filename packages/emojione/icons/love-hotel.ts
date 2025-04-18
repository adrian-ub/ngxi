import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLoveHotelIcon],svg[emojione-love-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#d0d0d0"><svg:path d="M0 58h64v6H0z"></svg:path><svg:path d="M10 58h14v2H10z"></svg:path></svg:g><svg:path fill="#3e4347" d="M10 58h14v2H10z"></svg:path><svg:path fill="#ffc7ce" d="M7 20h50v38H7z"></svg:path><svg:path fill="#e84d88" d="M12 42h10v16H12z"></svg:path><svg:path fill="#d6eef0" d="M12 26h10v10H12zm30 0h10v10H42zm-15 0h10v10H27zm15 16h10v10H42zm-15 0h10v10H27z"></svg:path><svg:path fill="#d0d0d0" d="M13 16h38v4H13z"></svg:path><svg:circle cx="20" cy="51" r="1" fill="#ffdd7d"></svg:circle><svg:path fill="#9450e0" d="M11 36h12v2H11zm15 0h12v2H26zm15 0h12v2H41zM26 52h12v2H26zm15 0h12v2H41z"></svg:path><svg:path fill="#e84d88" d="M12 26v6h1c1.7 0 3-1.3 3-3v-3zm10 0v6h-1c-1.7 0-3-1.3-3-3v-3zm-9 6h-1v4h4v-1c0-1.7-1.3-3-3-3m8 0c-1.7 0-3 1.3-3 3v1h4v-4zm6-6v6h1c1.7 0 3-1.3 3-3v-3zm10 0v6h-1c-1.7 0-3-1.3-3-3v-3zm-9 6h-1v4h4v-1c0-1.7-1.3-3-3-3m8 0c-1.7 0-3 1.3-3 3v1h4v-4zm6-6v6h1c1.7 0 3-1.3 3-3v-3zm10 0v6h-1c-1.7 0-3-1.3-3-3v-3zm-9 6h-1v4h4v-1c0-1.7-1.3-3-3-3m8 0c-1.7 0-3 1.3-3 3v1h4v-4zM27 42v6h1c1.7 0 3-1.3 3-3v-3zm10 0v6h-1c-1.7 0-3-1.3-3-3v-3zm-9 6h-1v4h4v-1c0-1.7-1.3-3-3-3m8 0c-1.7 0-3 1.3-3 3v1h4v-4zm6-6v6h1c1.7 0 3-1.3 3-3v-3zm10 0v6h-1c-1.7 0-3-1.3-3-3v-3zm-9 6h-1v4h4v-1c0-1.7-1.3-3-3-3m8 0c-1.7 0-3 1.3-3 3v1h4v-4zM36.3 0c-1.9 0-3.5.9-4.3 2.3C31.2.9 29.6 0 27.7 0C25.1 0 23 1.8 23 4c0 4 9 12 9 12s9-8 9-12c0-2.2-2.1-4-4.7-4"></svg:path><svg:path fill="#94989b" d="M10 60h14v2H10z"></svg:path>`,
})
export class EmojioneLoveHotelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
