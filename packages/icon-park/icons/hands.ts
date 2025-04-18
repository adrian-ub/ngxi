import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandsIcon],svg[icon-park-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="13" r="9" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M4.5 43.9994C4.5 38 11.5 27.9994 24 27.9994C24 27.9994 24 27.9994 24 27.9994C24 27.9994 26.7588 27.9994 29.7821 29.0906C32.7438 30.1596 36.5 31.1481 36.5 27.9994V27.9994V7.74952C36.5 5.67845 38.1789 3.99951 40.25 3.99951V3.99951C42.3211 3.99951 44 5.67844 44 7.74951V43.9994"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 44L46 44"></svg:path></svg:g>`,
})
export class IconParkHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
