import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeftIcon],svg[flat-color-icons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3F51B5"><svg:path d="m4 24l14-11.7v23.4z"></svg:path><svg:path d="M15 20h27v8H15z"></svg:path></svg:g>`,
})
export class FlatColorIconsLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
