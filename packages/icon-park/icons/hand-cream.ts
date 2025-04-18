import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandCreamIcon],svg[icon-park-hand-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M19 17C16.2688 18.1375 16.5121 21.5781 16.9998 23H30.9998C34.9016 17.3126 26.7838 11.1512 26.7838 13.521C26.7838 15.8907 22.414 15.5781 19 17Z"></svg:path><svg:rect width="22" height="8" x="13" y="23"></svg:rect></svg:g>`,
})
export class IconParkHandCreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
