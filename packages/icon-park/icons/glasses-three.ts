import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGlassesThreeIcon],svg[icon-park-glasses-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="12" cy="33" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M29 33C29 29.6863 27.5 27 24 27C20.5 27 19 29.6863 19 33"></svg:path><svg:circle cx="36" cy="33" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M14 8H12C8.68629 8 6 10.6863 6 14V22"></svg:path><svg:path stroke-linecap="round" d="M34 8H36C39.3137 8 42 10.6863 42 14V22"></svg:path></svg:g>`,
})
export class IconParkGlassesThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
