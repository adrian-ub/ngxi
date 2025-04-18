import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockTenIcon],svg[icon-park-block-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6H36V18H24V6Z"></svg:path><svg:path d="M24 6H36V18H24V6Z"></svg:path><svg:path d="M12 6H24V18H12V6Z"></svg:path><svg:path d="M12 30H24V42H12V30Z"></svg:path><svg:path d="M12 18H24V30H12V18Z"></svg:path></svg:g>`,
})
export class IconParkBlockTenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
