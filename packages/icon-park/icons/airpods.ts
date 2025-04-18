import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAirpodsIcon],svg[icon-park-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36 4C31.0294 4 27 8.02944 27 13V44H33V21.4879C33.9383 21.8195 34.9481 22 36 22C39.4829 22 42.5038 20.0216 44 17.1272V8.8728C42.5038 5.97844 39.4829 4 36 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M12 4C16.9706 4 21 8.02944 21 13V44H15V21.4879C14.0617 21.8195 13.0519 22 12 22C8.51707 22 5.49623 20.0216 4 17.1272V8.8728C5.49623 5.97844 8.51707 4 12 4Z"></svg:path><svg:path stroke="#fff" d="M15 13H14"></svg:path><svg:path stroke="#fff" d="M33 13H34"></svg:path></svg:g>`,
})
export class IconParkAirpodsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
