import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorOneIcon],svg[icon-park-anchor-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 35C40 25.7953 32.8366 10 24 10C15.1634 10 8 25.7953 8 35"></svg:path><svg:rect width="8" height="8" x="4" y="35" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="4" y="6" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="35" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="6" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M12 10H36"></svg:path></svg:g>`,
})
export class IconParkAnchorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
