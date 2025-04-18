import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilMusicIcon],svg[il-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M529 9q11-2 20 5t8 18v440q0 24-8 45t-24 38t-35 27t-45 11t-49-10t-41-29t-25-43t-3-52q5-35 30-61t59-34q25-4 48 0V209l-231 50v329q0 24-8 45t-24 38t-35 27t-45 11t-50-10t-40-29t-25-43t-4-52q6-35 31-61t59-34q25-4 48 0V111q0-8 5-14t13-8z"></svg:path>`,
})
export class IlMusicIcon {
  readonly viewBox = input("0 0 560 830")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
