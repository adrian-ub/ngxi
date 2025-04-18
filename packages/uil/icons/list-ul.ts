import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilListUlIcon],svg[uil-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.71 16.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21a1 1 0 0 0-.21.33a1 1 0 0 0 .21 1.09a1.2 1.2 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.2 1.2 0 0 0 .33-.21a1 1 0 0 0 .21-1.09a1 1 0 0 0-.21-.33M7 8h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m-3.29 3.29a1 1 0 0 0-1.09-.21a1.2 1.2 0 0 0-.33.21a1 1 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.2 1.2 0 0 0 .21.33a1.2 1.2 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.2 1.2 0 0 0 .33-.21a1.2 1.2 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33M21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M3.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-1.09.21a1.2 1.2 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.2 1.2 0 0 0 .21.33a1.2 1.2 0 0 0 .33.21a1 1 0 0 0 1.09-.21a1.2 1.2 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1.2 1.2 0 0 0-.21-.33M21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
