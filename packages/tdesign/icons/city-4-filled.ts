import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity4FilledIcon],svg[tdesign-city-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 4.52l3.5-2.8l3.5 2.8V22h-9v-6h-2v6H2V4.52l3.5-2.8L9 4.52v3.862l3-1.5l3 1.5zM4 5.48V20h3V5.48l-1.5-1.2zm13 0V20h3V5.48l-1.5-1.2zM14 12h-4v2h4z"></svg:path>`,
})
export class TdesignCity4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
