import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBageterieBoulevardIcon],svg[arcticons-bageterie-boulevard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.665 9.645l1.076 18.73c10.16.655 10.865-11.179-.258-10.176c8.568-.204 10.533-10.327-.818-8.554"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.75 21.506l-.591 18.17c9.747 1.516 11.46-9.844.636-9.844c8.287.549 11.065-9.05-.044-8.327"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.013 6.984L11.93 31.67l6.921-.064l-.078 11.007l18.007.886l1.207-25.732l-9.11-1.154L27.97 4.5z"></svg:path>`,
})
export class ArcticonsBageterieBoulevardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
