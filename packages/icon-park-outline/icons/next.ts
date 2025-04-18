import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNextIcon],svg[icon-park-outline-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M4 40.836q7.34-8.96 13.036-10.168t10.846-.365V41L44 23.545L27.882 7v10.167Q18.359 17.242 11.69 24Q5.023 30.758 4 40.836Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkOutlineNextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
