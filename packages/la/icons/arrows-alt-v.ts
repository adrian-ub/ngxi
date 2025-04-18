import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltVIcon],svg[la-arrows-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.094l-.719.687l-8 8L8.72 12.22L15 5.938v20.125L8.719 19.78L7.28 21.22l8 8l.719.687l.719-.687l8-8l-1.438-1.438L17 26.063V5.938l6.281 6.28l1.438-1.437l-8-8z"></svg:path>`,
})
export class LaArrowsAltVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
