import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPharmeasyIcon],svg[arcticons-pharmeasy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.722 32.211l6.9-6.9L33.911 35.6l-6.9 6.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.098 22.587l13.89-13.89c4.263-4.262 11.173-4.262 15.435 0h0c4.262 4.262 4.262 11.172 0 15.434l4.479 4.478"></svg:path>`,
})
export class ArcticonsPharmeasyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
