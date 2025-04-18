import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailOpenIcon],svg[icon-park-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z"></svg:path><svg:path stroke-linecap="round" d="M4 17.7839L24 4L44 17.7839"></svg:path></svg:g>`,
})
export class IconParkMailOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
