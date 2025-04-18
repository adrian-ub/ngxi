import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biPhoneLandscapeFillIcon],svg[bi-phone-landscape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm11-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class BiPhoneLandscapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
