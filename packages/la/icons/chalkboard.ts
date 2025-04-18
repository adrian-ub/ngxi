import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChalkboardIcon],svg[la-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7v16H3v2h26v-2h-2V7zm2 2h18v14H7zm14.281 3.281L17 16.562l-3.281-3.28l-.719-.688l-.719.687l-3 3l1.438 1.438L13 15.437l3.281 3.282l.719.687l.719-.687l5-5zM20 20l-1 1l1 1h4v-2z"></svg:path>`,
})
export class LaChalkboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
