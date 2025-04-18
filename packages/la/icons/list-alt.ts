import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laListAltIcon],svg[la-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.281 5.281L7 8.563L5.719 7.28L4.28 8.72l2 2l.719.687l.719-.687l4-4zM15 7v2h13V7zm-4.719 6.281L7 16.562l-1.281-1.28l-1.438 1.437l2 2l.719.687l.719-.687l4-4zM15 15v2h13v-2zm-4.719 6.281L7 24.563L5.719 23.28L4.28 24.72l2 2l.719.687l.719-.687l4-4zM15 23v2h13v-2z"></svg:path>`,
})
export class LaListAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
