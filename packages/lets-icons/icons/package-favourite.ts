import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPackageFavouriteIcon],svg[lets-icons-package-favourite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V8.236a1 1 0 0 0-.106-.447l-1.341-2.683A2 2 0 0 0 16.763 4H7.237a2 2 0 0 0-1.789 1.106L4.106 7.789A1 1 0 0 0 4 8.236V18.5A1.5 1.5 0 0 0 5.5 20Z"></svg:path><svg:path stroke-linejoin="round" d="M5 8h14m-9-4L9 8v6l3-2l3 2V8l-1-4"></svg:path></svg:g>`,
})
export class LetsIconsPackageFavouriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
