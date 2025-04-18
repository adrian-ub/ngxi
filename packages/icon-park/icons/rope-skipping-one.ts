import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRopeSkippingOneIcon],svg[icon-park-rope-skipping-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M7 40.0001V22.0001C7 22.0001 8 8.00007 15 5.00008C22 2.00009 30 11.0001 30 20.0001C30 25.0001 28 29.0001 24 29.0001C20 29.0001 18 25.0001 18 20.0001C18 11.0001 26 2.00008 33 5.00008C40 8.00007 41 22.0001 41 22.0001V40.0001"></svg:path><svg:path d="M4 31H10"></svg:path><svg:path d="M38 31H44"></svg:path></svg:g>`,
})
export class IconParkRopeSkippingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
