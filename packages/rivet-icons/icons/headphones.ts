import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsHeadphonesIcon],svg[rivet-icons-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0v8h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2A6 6 0 0 0 2 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H0zm2 2v4h2v-4zm12 0h-2v4h2z"></svg:path>`,
})
export class RivetIconsHeadphonesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
