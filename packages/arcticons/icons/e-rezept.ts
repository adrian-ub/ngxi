import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsERezeptIcon],svg[arcticons-e-rezept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="44.974" height="17.75" x="1.513" y="15.125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.875" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.551 24l3.35 3.35a8.875 8.875 0 0 1 0 12.55h0a8.875 8.875 0 0 1-12.552 0L8.1 20.65a8.875 8.875 0 0 1 0-12.55h0a8.875 8.875 0 0 1 12.552 0L24 11.448"></svg:path>`,
})
export class ArcticonsERezeptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
