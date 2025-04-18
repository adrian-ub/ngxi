import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoDimensionalCodeIcon],svg[icon-park-solid-two-dimensional-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14z"></svg:path><svg:path stroke-linecap="round" d="M29 28v14m12-14v14"></svg:path></svg:g>`,
})
export class IconParkSolidTwoDimensionalCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
