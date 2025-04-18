import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSizeIcon],svg[gg-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6V4h8v16h-8v-2H8v-2H4V8h4V6zm2 0h4v12h-4zm-2 2h-2v8h2zm-4 2v4H6v-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
