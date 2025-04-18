import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsPointerDownFillIcon],svg[akar-icons-pointer-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.05 17.65a3 3 0 0 0 1.2-2.4v-11a3 3 0 0 0-3-3h-12a3 3 0 0 0-3 3v11a3 3 0 0 0 1.2 2.4l6 4.5a3 3 0 0 0 3.6 0z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsPointerDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
