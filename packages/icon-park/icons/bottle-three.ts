import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleThreeIcon],svg[icon-park-bottle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.1875 10H26.8125L33 21.1806V44H15V21.1806L21.1875 10Z"></svg:path><svg:rect width="8" height="6" x="20" y="4" fill="#2F88FF"></svg:rect><svg:rect width="6" height="12" x="21" y="23" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkBottleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
