import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapClothingStoreIcon],svg[map-clothing-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.36 14.75c.08.29-.021.61-.19.86l-5.39 8.02c-.2.31-.62.48-.971.48c-.1 0-.38-.02-.489-.05L36 23v19c0 .58-.41 1-1 1H14c-.59 0-1-.42-1-1V23l-3.88 1.07c-.45.14-.84-.04-1.09-.43l-5.35-8c-.17-.26-.22-.55-.14-.84c.07-.3.28-.5.55-.64L14 9h5c.59 0 1 .41 1 1c0 2.06 2.89 3.52 4.95 3.52S30 12.07 30 10c0-.58.41-1 1-1h5l10.8 5.06c.28.14.48.39.56.69"></svg:path>`,
})
export class MapClothingStoreIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
