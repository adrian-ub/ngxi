import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTumblrIconIcon],svg[logos-tumblr-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#303D4D" d="M234.576 355.8c-8.28 3.95-24.125 7.387-35.953 7.7c-35.64.959-42.56-25.04-42.872-43.921V180.922H245.2v-67.42h-89.113V.042H90.831c-1.071 0-2.946.937-3.192 3.325C83.823 38.093 67.554 99.041 0 123.39v57.533h45.08v145.553c0 49.812 36.757 120.602 133.792 118.95c32.717-.558 69.072-14.283 77.128-26.088z"></svg:path>`,
})
export class LogosTumblrIconIcon {
  readonly viewBox = input("0 0 256 446")
  readonly width = input("0.58em")
  readonly height = input("1em")
}
