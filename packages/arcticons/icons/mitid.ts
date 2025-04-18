import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitidIcon],svg[arcticons-mitid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.38 34.656V13.344h5.796a9.324 9.324 0 0 1 9.324 9.324v2.664a9.324 9.324 0 0 1-9.324 9.324zm-23.88 0a9.77 9.77 0 0 1 9.768-9.768h0a9.77 9.77 0 0 1 9.768 9.768h0z"></svg:path><svg:circle cx="14.268" cy="19.116" r="5.772" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMitidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
