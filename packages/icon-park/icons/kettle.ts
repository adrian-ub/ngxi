import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKettleIcon],svg[icon-park-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="7" x="6.778" y="37" fill="#2F88FF"></svg:rect><svg:path d="M38.7778 36L36.7778 10H4.77783L11.3438 17.5493C11.8727 18.1574 12.1347 18.9527 12.0707 19.7561L10.7778 36"></svg:path><svg:path d="M26.7778 18H21.7778"></svg:path><svg:path d="M26.7778 24H21.7778"></svg:path><svg:path d="M26.7778 30H21.7778"></svg:path><svg:path d="M36.7778 10H44.7778V26H38.7778"></svg:path><svg:path d="M19.7778 9V4H28.7778V9"></svg:path></svg:g>`,
})
export class IconParkKettleIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
