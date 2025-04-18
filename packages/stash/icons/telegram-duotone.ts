import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTelegramDuotoneIcon],svg[stash-telegram-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.625a9.375 9.375 0 1 0 0 18.75a9.375 9.375 0 0 0 0-18.75M1.375 12C1.375 6.132 6.132 1.375 12 1.375S22.625 6.132 22.625 12S17.868 22.625 12 22.625S1.375 17.868 1.375 12"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4.742-13.351l-1.158 7.415a.625.625 0 0 1-.95.433l-3.878-2.43a.625.625 0 0 1-.1-.981L13.874 10c.035-.034-.008-.09-.05-.065L9.16 12.728a1.3 1.3 0 0 1-.925.163l-1.69-.327c-.608-.118-.693-.954-.12-1.191l9.034-3.735a.938.938 0 0 1 1.284 1.01"></svg:path></svg:g>`,
})
export class StashTelegramDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
