import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity3FilledIcon],svg[tdesign-city-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h7v20h-9v-6h-2v6H2V2h7v5h6zM4 20h3V4H4zM17 4v16h3V4zm-3 7h-4v2h4z"></svg:path>`,
})
export class TdesignCity3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
