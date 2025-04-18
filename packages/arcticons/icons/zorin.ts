import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZorinIcon],svg[arcticons-zorin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.333 35.863l3.409 5.904h20.516l3.409-5.904zM44.5 24l-3.438 5.959H19.244L41.062 18.04zm-41 0l3.438-5.959h21.818L6.938 29.96zm6.833-11.863l3.409-5.904h20.516l3.409 5.904z"></svg:path>`,
})
export class ArcticonsZorinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
