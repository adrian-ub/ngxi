import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStealthBomberIcon],svg[game-icons-stealth-bomber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32L20 400l60 64l52.1-75.9L176 432l50.5-50.5L256 448l29.5-66.5L336 432l43.9-43.9L432 464l60-64zm-9 47v78l-39-13zm18 0l39 65l-39 13z"></svg:path>`,
})
export class GameIconsStealthBomberIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
