import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFaceuIcon],svg[icon-park-faceu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12V16C29.6667 16.8333 36 19 36 26C36 33 30 36 24 36C18 36 12 33 12 26C12 18 21.6667 13.1667 27 12Z"></svg:path><svg:ellipse cx="29" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse><svg:ellipse cx="19" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse></svg:g>`,
})
export class IconParkFaceuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
