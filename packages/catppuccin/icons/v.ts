import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVIcon],svg[catppuccin-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 1.5l4 .5L10 14.5H6z"></svg:path><svg:path d="M8 8.95L10.5 2l4-.5l-4.5 13"></svg:path></svg:g>`,
})
export class CatppuccinVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
