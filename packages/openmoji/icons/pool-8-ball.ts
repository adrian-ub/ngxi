import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPool8BallIcon],svg[openmoji-pool-8-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="35.958" r="29" fill="#3F3F3F"></svg:circle><svg:circle cx="36" cy="35.958" r="15" fill="#FFF"></svg:circle><svg:path fill-opacity=".6" d="M50.738 10.999c4.825 5.179 7.782 12.122 7.782 19.76c0 16.015-12.984 29-29 29a28.86 28.86 0 0 1-14.664-3.985C20.145 61.42 27.653 64.958 36 64.958c16.016 0 29-12.984 29-29c0-10.631-5.73-19.911-14.262-24.96"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="35.958" r="29"></svg:circle><svg:circle cx="36" cy="32.595" r="3.363"></svg:circle><svg:circle cx="36" cy="40.31" r="4.352"></svg:circle></svg:g>`,
})
export class OpenmojiPool8BallIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
