import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEyesIcon],svg[openmoji-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="19.548" cy="35.958" fill="#FFF" rx="14.469" ry="24.655"></svg:ellipse><svg:ellipse cx="52.452" cy="35.958" fill="#FFF" rx="14.469" ry="24.655"></svg:ellipse><svg:ellipse cx="52.452" cy="35.958" fill="#FFF" rx="14.469" ry="24.655"></svg:ellipse><svg:circle cx="46.01" cy="37.817" r="8.027" fill="#A57939"></svg:circle><svg:ellipse cx="19.548" cy="35.958" fill="#FFF" rx="14.469" ry="24.655"></svg:ellipse><svg:circle cx="13.106" cy="37.817" r="8.027" fill="#A57939"></svg:circle><svg:ellipse cx="19.548" cy="35.958" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" rx="14.469" ry="24.655"></svg:ellipse><svg:ellipse cx="52.452" cy="35.958" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" rx="14.469" ry="24.655"></svg:ellipse><svg:circle cx="13.106" cy="37.817" r="3.623"></svg:circle><svg:circle cx="46.01" cy="37.817" r="3.623"></svg:circle><svg:circle cx="13.106" cy="37.817" r="3.623" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="13.106" cy="37.817" r="8.027" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="46.01" cy="37.817" r="3.623" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="46.01" cy="37.817" r="8.027" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle>`,
})
export class OpenmojiEyesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
