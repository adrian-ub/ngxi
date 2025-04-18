import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSpadesIcon],svg[iconoir-spades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 14.5c3 4.5 9 4.47 9-.5c0-4-4-7-9-12c-5 5-9 8-9 12c0 4.97 6 5 9 .5"></svg:path><svg:path d="m11.47 15.493l-3 5.625A.6.6 0 0 0 9 22h6a.6.6 0 0 0 .53-.882l-3-5.625a.6.6 0 0 0-1.06 0Z"></svg:path></svg:g>`,
})
export class IconoirSpadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
