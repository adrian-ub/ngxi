import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLipstickOneIcon],svg[icon-park-lipstick-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39.4346 5.32275L40.8488 6.73697C42.4109 8.29906 42.4109 10.8317 40.8488 12.3938L33.7777 19.4649L29.5351 15.2222L39.4346 5.32275Z"></svg:path><svg:rect width="10" height="16" x="28.121" y="13.808" transform="rotate(45 28.121 13.808)"></svg:rect><svg:rect width="14" height="14" x="15.394" y="23.707" transform="rotate(45 15.394 23.707)"></svg:rect></svg:g>`,
})
export class IconParkLipstickOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
