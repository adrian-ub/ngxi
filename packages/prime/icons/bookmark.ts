import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBookmarkIcon],svg[prime-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 20.75a.83.83 0 0 1-.43-.13L12 16.91l-5.32 3.71a.75.75 0 0 1-.78 0a.74.74 0 0 1-.4-.62V6a2.75 2.75 0 0 1 2.75-2.75h7.5A2.75 2.75 0 0 1 18.5 6v14a.74.74 0 0 1-.4.66a.73.73 0 0 1-.35.09M12 15.25a.75.75 0 0 1 .43.13L17 18.56V6a1.25 1.25 0 0 0-1.25-1.25h-7.5A1.25 1.25 0 0 0 7 6v12.56l4.57-3.18a.75.75 0 0 1 .43-.13"></svg:path>`,
})
export class PrimeBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
