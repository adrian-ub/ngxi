import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentLeftCenterIcon],svg[icon-park-alignment-left-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 30H16"></svg:path><svg:path stroke="#fff" d="M12 24H24"></svg:path><svg:path stroke="#fff" d="M12 18H20"></svg:path></svg:g>`,
})
export class IconParkAlignmentLeftCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
