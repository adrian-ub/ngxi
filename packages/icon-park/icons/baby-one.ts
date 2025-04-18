import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyOneIcon],svg[icon-park-baby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:circle cx="24" cy="8" r="5" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M5 28C5 28 22 7.75 43 28"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M19 28V24.2105C19 24.2105 19 19 24 19C29 19 29 24.2105 29 24.2105V28V32C29 32 29 37 24 37C19 37 19 32 19 32V28Z"></svg:path><svg:path stroke-linejoin="round" d="M29 32L37 37L31 44"></svg:path><svg:path stroke-linejoin="round" d="M19 32L11 37L17 44"></svg:path></svg:g>`,
})
export class IconParkBabyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
