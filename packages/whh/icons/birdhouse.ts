import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBirdhouseIcon],svg[whh-birdhouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 555.5Q985 575 957.5 575T911 555l-27-27l-84 431q-3 21-23.5 42.5T736 1023H289q-20 0-40.5-21.5T225 959l-84-432l-28 28q-19 20-46.5 20t-47-19.5t-19.5-47T19 462L463 19q20-20 49-19q29-1 49 19l444 443q19 19 19 46.5t-19.5 47M512.5 895q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45 19t-18.5 45.5t18.5 45t45 18.5m.5-512q-53 0-90.5 37.5T385 511t37.5 90.5T513 639t90-37.5t37-90.5t-37-90.5t-90-37.5"></svg:path>`,
})
export class WhhBirdhouseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
