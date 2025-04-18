import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimListUlIcon],svg[uim-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2M3 8a1 1 0 0 1-.38-.08a1.2 1.2 0 0 1-.33-.21a1.2 1.2 0 0 1-.21-.33a.95.95 0 0 1 0-.76a1.2 1.2 0 0 1 .21-.33a1 1 0 0 1 1.09-.21a1 1 0 0 1 .33.21a1.2 1.2 0 0 1 .21.33a.94.94 0 0 1 0 .76a1.2 1.2 0 0 1-.21.33A1 1 0 0 1 3 8m0 5a1 1 0 0 1-.38-.08a1.2 1.2 0 0 1-.33-.21a1.2 1.2 0 0 1-.21-.33a.95.95 0 0 1 0-.76a1 1 0 0 1 .21-.33a1.2 1.2 0 0 1 .33-.21a1 1 0 0 1 1.09.21a1 1 0 0 1 .21.33a.94.94 0 0 1 0 .76a1.2 1.2 0 0 1-.21.33a1.2 1.2 0 0 1-.33.21A1 1 0 0 1 3 13m0 5a1 1 0 0 1-.38-.08a1.2 1.2 0 0 1-.33-.21a.99.99 0 0 1-.21-1.09a1 1 0 0 1 .21-.33a1 1 0 0 1 .33-.21a1 1 0 0 1 .76 0a1 1 0 0 1 .33.21a1 1 0 0 1 .21.33a.99.99 0 0 1-.21 1.09a1.2 1.2 0 0 1-.33.21A1 1 0 0 1 3 18"></svg:path>`,
})
export class UimListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
