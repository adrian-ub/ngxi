import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMoveInOneIcon],svg[icon-park-outline-move-in-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m28 28l14 2.8l-4.2 2.8l4.2 4.2l-4.2 4.2l-4.2-4.2l-2.8 4.2z" clip-rule="evenodd"></svg:path><svg:path d="M42 22V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h13"></svg:path></svg:g>`,
})
export class IconParkOutlineMoveInOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
