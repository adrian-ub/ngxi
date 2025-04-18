import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidInfoIcon],svg[fa-solid-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20M96 0C56.235 0 24 32.235 24 72s32.235 72 72 72s72-32.235 72-72S135.764 0 96 0"></svg:path>`,
})
export class FaSolidInfoIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
