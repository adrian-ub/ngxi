import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAlphabeticalSortingZaIcon],svg[flat-color-icons-alphabetical-sorting-za-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M16.8 40h-5.3l-1.1 3H6.9l5.7-15.2h2.9L21.1 43h-3.2zm-4.6-2.7H16l-1.9-5.7zm.2-19.6H20v2.5H8.4v-1.9L16 7.5H8.4V5h11.4v1.7z"></svg:path><svg:path fill="#546E7A" d="M38 33V5h-4v28h-6l8 10l8-10z"></svg:path>`,
})
export class FlatColorIconsAlphabeticalSortingZaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
