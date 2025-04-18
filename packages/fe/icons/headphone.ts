import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feHeadphoneIcon],svg[fe-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 13a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-9a5 5 0 0 0-10 0v9a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2v-3a7 7 0 1 1 14 0z"></svg:path>`,
})
export class FeHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
