import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCupOneIcon],svg[icon-park-cup-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 17C10 17 36 17 38 17C40 17 44 17 44 20C44 23 40 23 38 23V41C38 42.1046 37.1046 43 36 43H12C10.8954 43 10 42.1046 10 41V23C8 23 4 23 4 20C4 17 8 17 10 17Z"></svg:path><svg:path d="M41 17C41 11.1271 35.4587 9.31869 28 8V6C28 4.89543 27.1046 4 26 4H22C20.8954 4 20 4.89543 20 6V8C12.5413 9.31869 7 11.1271 7 17"></svg:path></svg:g>`,
})
export class IconParkCupOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
