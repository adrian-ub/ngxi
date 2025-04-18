import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNextTrackButtonIcon],svg[fluent-emoji-flat-next-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M16 17h-.04l-6.267 6.03c-.635.612-1.693.162-1.693-.72V9.69c0-.882 1.058-1.332 1.693-.72L15.961 15H16V9.69c0-.882 1.058-1.332 1.693-.72L23.961 15H24V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V17h-.04l-6.267 6.03c-.635.612-1.693.162-1.693-.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNextTrackButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
