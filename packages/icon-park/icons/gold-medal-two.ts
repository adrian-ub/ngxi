import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGoldMedalTwoIcon],svg[icon-park-gold-medal-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"></svg:path><svg:path fill="#2F88FF" d="M16 4H32V20V23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556V20V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4H32M16 4H8V14L16 20M16 4V20M32 4H40V14L32 20M32 4V20M16 23.0556C18.123 21.1554 20.9266 20 24 20C27.0734 20 29.877 21.1554 32 23.0556M16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32C36 28.446 34.455 25.2529 32 23.0556M16 23.0556V20M32 23.0556V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 4H40V14L32 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4H8V14L16 20"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4.00009H32V20.0001V23.0557C29.877 21.1555 27.0734 20.0001 24 20.0001C20.9266 20.0001 18.123 21.1555 16 23.0557V20.0001V4.00009Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 37V27L22 28M24 37H26M24 37H22"></svg:path></svg:g>`,
})
export class IconParkGoldMedalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
