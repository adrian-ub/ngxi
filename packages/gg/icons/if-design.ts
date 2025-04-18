import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggIfDesignIcon],svg[gg-if-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h4v14h-4zM5 19v-9h4v9zM7 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0h4v4h-4zm4 5h-4v4h4z"></svg:path>`,
})
export class GgIfDesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
