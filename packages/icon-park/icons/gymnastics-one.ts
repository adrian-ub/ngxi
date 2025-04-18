import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGymnasticsOneIcon],svg[icon-park-gymnastics-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M27 24C29.7614 24 32 21.7614 32 19C32 16.2386 29.7614 14 27 14C24.2386 14 22 16.2386 22 19C22 21.7614 24.2386 24 27 24Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 29L21 36L12 33L8 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 36L22.49 42.48C22.71 43.37 23.51 44 24.43 44H35.01"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 23L23 29L14 20L13 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 4C14 4 14.69 4 17 4C29 4 44 5.45 44 32"></svg:path></svg:g>`,
})
export class IconParkGymnasticsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
