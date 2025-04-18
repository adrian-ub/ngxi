import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLastTrackButtonIcon],svg[fluent-emoji-flat-last-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M9 15.038V9.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5.538l6.307 6.069c.635.611 1.693.16 1.693-.72v-5.349l6.307 6.069c.635.611 1.693.16 1.693-.72V9.69c0-.882-1.058-1.332-1.693-.72L17 15.037V9.69c0-.882-1.058-1.332-1.693-.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLastTrackButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
