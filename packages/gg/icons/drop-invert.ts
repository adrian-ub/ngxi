import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDropInvertIcon],svg[gg-drop-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.136L5.636 7.5a9 9 0 0 0 7.227 15.323A9 9 0 0 0 18.364 7.5zM7.05 8.914L12 3.964v16.9a7 7 0 0 1-4.95-11.95" clip-rule="evenodd"></svg:path>`,
})
export class GgDropInvertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
