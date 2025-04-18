import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWindmillIcon],svg[icon-park-solid-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 23.992l-.03-9.996L23.943 4L12 14v10zm.008.008l9.996-.03L44 23.943L34 12H24zm-.008.008l.03 9.996l.028 9.996L36 34V24zM23.992 24l-9.996.03L4 24.057L14 36h10z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidWindmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
