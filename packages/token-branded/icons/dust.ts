import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDustIcon],svg[token-branded-dust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.429 3h3.085v3.086H9.43z"></svg:path><svg:path d="M6.856 4.028h4.115v3.086H6.856z"></svg:path><svg:path d="M5.828 5.572h4.114v2.57H5.828z"></svg:path><svg:path d="M4.286 7.628H8.4v3.086H4.286z"></svg:path><svg:path d="M7.886 9.172h4.629v1.542H7.886z"></svg:path><svg:path d="M7.885 10.2h3.086v1.543H7.885zm-2.057 0h1.543v4.114H5.828z"></svg:path><svg:path d="M4.286 11.743h2.057v1.543H4.286zm2.571 1.029H8.4v5.143H6.857z"></svg:path><svg:path d="M7.886 15.343H9.43v4.114H7.886zM9.43 13.8h1.543V21H9.429z"></svg:path><svg:path d="M10.457 12.771h3.086v1.543h-3.086zm0 2.572h2.057v1.543h-2.057zm0 2.057h3.086V21h-3.086zM14.571 3h-3.085v3.086h3.085z"></svg:path><svg:path d="M17.143 4.028h-4.115v3.086h4.115z"></svg:path><svg:path d="M18.17 5.572h-4.113v2.57h4.114z"></svg:path><svg:path d="M19.714 7.628H15.6v3.086h4.114z"></svg:path><svg:path d="M16.114 9.172h-4.628v1.542h4.628z"></svg:path><svg:path d="M16.114 10.2h-3.086v1.543h3.086zm2.057 0h-1.543v4.114h1.543z"></svg:path><svg:path d="M19.714 11.743h-2.057v1.543h2.057zm-2.571 1.029H15.6v5.143h1.543z"></svg:path><svg:path d="M16.114 15.343h-1.543v4.114h1.543zM14.571 13.8h-1.543V21h1.543z"></svg:path><svg:path d="M13.543 15.343h-2.057v1.543h2.057z"></svg:path>`,
})
export class TokenBrandedDustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
