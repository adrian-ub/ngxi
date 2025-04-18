import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTwoHandsIcon],svg[icon-park-outline-two-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m37 19.976l-.983 3.957l-8.706 6.307l.05 11.718L34 42l-.373-8.485Q44.01 27.02 44.01 24V6.06M11 20.051l1.033 3.95l8.368 6.415l.359 11.712L14 42l.203-8.091q-10.19-5.862-10.19-8.928V6.03"></svg:path>`,
})
export class IconParkOutlineTwoHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
