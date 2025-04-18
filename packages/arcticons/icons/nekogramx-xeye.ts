import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNekogramxXeyeIcon],svg[arcticons-nekogramx-xeye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.085 42.5c-.634-1.877-1.326-3.538-.87-5.744c-1.711-2.235-3.302-9.254-1.887-14.82c3.16.801 6.251 1.78 8.833 4.091c1.757-1.7 3.339-3.436 7.226-4.681c-1.369-3.999-1.632-7.4-1.338-10.5c3.863-.277 7.092 1.765 9.373 4.036"></svg:path><svg:ellipse cx="38.359" cy="26.382" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.571" ry="1.727" transform="rotate(-47.468 38.359 26.382)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.59 36.528l.131-3.197m-1.664 1.533l3.197.131"></svg:path>`,
})
export class ArcticonsNekogramxXeyeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
