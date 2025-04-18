import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSeatIcon],svg[icon-park-outline-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M17 21.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20c-4 0-7.5-.5-14-3v12h14v14"></svg:path><svg:circle cx="24" cy="8" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
