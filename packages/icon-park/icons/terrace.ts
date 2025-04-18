import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTerraceIcon],svg[icon-park-terrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M5 24V40C5 41.1046 5.89543 42 7 42H41C42.1046 42 43 41.1046 43 40V24"></svg:path><svg:path stroke-linejoin="round" d="M43 31L5 31"></svg:path><svg:path d="M32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23"></svg:path><svg:path stroke-linejoin="round" d="M24 6V8"></svg:path><svg:path stroke-linejoin="round" d="M35.4141 10L33.9998 11.4142"></svg:path><svg:path stroke-linejoin="round" d="M12 10L13.4142 11.4142"></svg:path></svg:g>`,
})
export class IconParkTerraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
