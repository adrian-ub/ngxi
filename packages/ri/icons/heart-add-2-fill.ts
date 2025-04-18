import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHeartAdd2FillIcon],svg[ri-heart-add-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3C19.538 3 22 5.5 22 9c0 1.425-.31 2.726-.827 3.907a6 6 0 0 0-8.36 8.112c-.307.182-.581.342-.813.481C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2M19 17v-3h-2v3h-3v2h2.999L17 22h2l-.001-3H22v-2z"></svg:path>`,
})
export class RiHeartAdd2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
