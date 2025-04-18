import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapFuneralHomeIcon],svg[map-funeral-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.242 2.089L1 23h6v25h36V23h6zM34 30h-7v12.088L26.954 42h-4.775l-.179.088V30h-6v-4h6v-9h5v9h7z"></svg:path>`,
})
export class MapFuneralHomeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
