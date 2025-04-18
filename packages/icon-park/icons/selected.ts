import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSelectedIcon],svg[icon-park-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4V12H12V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 36H36V44H44V36Z"></svg:path><svg:path fill="#2F88FF" d="M12 36H4V44H12V36Z"></svg:path><svg:path fill="#2F88FF" d="M44 4H36V12H44V4Z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12"></svg:path><svg:path stroke-linecap="round" d="M40 36V12"></svg:path><svg:path stroke-linecap="round" d="M12 8H36"></svg:path><svg:path stroke-linecap="round" d="M12 40H36"></svg:path></svg:g>`,
})
export class IconParkSelectedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
