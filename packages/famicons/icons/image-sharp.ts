import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsImageSharpIcon],svg[famicons-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24m-124.38 64.2a48 48 0 1 1-43.42 43.42a48 48 0 0 1 43.42-43.42M76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416Zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84Z"></svg:path>`,
})
export class FamiconsImageSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
