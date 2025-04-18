import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses1Icon],svg[tdesign-houses-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h4v-7h8v7h4V4zm10 16v-5h-4v5zM8 6v3H6V6zm5 0v3h-2V6zm5 0v3h-2V6z"></svg:path>`,
})
export class TdesignHouses1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
