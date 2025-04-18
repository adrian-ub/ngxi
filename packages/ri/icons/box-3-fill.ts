import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBox3FillIcon],svg[ri-box-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.502 5.922L12 1L3.498 5.922L12 10.845zM2.5 7.656V17.5l8.5 4.921v-9.844zM13 22.42l8.5-4.921V7.656l-8.5 4.92z"></svg:path>`,
})
export class RiBox3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
