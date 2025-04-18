import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFavouriteAltIcon],svg[marketeq-favourite-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 18.75c0 17.042-18.75 25-18.75 25s-18.75-7.875-18.75-25a9.98 9.98 0 0 1 9.375-10.417A9.98 9.98 0 0 1 25 18.75a9.98 9.98 0 0 1 9.375-10.417A9.98 9.98 0 0 1 43.75 18.75"></svg:path>`,
})
export class MarketeqFavouriteAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
