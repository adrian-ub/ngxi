import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSocialHackernewsOutlineIcon],svg[ion-social-hackernews-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 96v320H96V96h320m32-32H64v384h384V64z" fill="currentColor"></svg:path><svg:path d="M296.7 159H342l-63.9 120v72h-39.9v-72L172 159h47.1l39.7 83.6 37.9-83.6z" fill="currentColor"></svg:path>`,
})
export class IonSocialHackernewsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
