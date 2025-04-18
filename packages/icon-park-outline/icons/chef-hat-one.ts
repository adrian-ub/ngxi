import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChefHatOneIcon],svg[icon-park-outline-chef-hat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 24.125a8.64 8.64 0 1 1 3.857-16.837A8.63 8.63 0 0 1 23.64 4a8.63 8.63 0 0 1 6.919 3.464A8.64 8.64 0 1 1 35 24.124V40a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2zM13 31h22m-15-6v6m15-3v6m-22-6v6"></svg:path>`,
})
export class IconParkOutlineChefHatOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
