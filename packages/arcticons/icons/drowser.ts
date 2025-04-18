import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrowserIcon],svg[arcticons-drowser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="19.198" height="44.407" x="15.644" y="1.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.599" transform="rotate(45 25.243 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.03 30.787L18.456 17.213"></svg:path>`,
})
export class ArcticonsDrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
