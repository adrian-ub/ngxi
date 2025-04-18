import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidSuitcaseIcon],svg[fa-solid-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48zm64-384h128v32H192zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48M96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48z"></svg:path>`,
})
export class FaSolidSuitcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
