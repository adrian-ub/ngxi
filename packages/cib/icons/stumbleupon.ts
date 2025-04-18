import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibStumbleuponIcon],svg[cib-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.431 16.625v4.356a7.023 7.023 0 0 1-7.025 7.025c-3.863 0-7.025-3.113-7.025-6.956v-4.387l2.144 1l3.194-.95v4.413c0 .919.75 1.656 1.669 1.656s1.675-.738 1.675-1.656v-4.5zm-14.044-3.637l2.144 1l3.194-.95v-2.225C22.725 7.032 19.531 4 15.719 4c-3.8 0-7.006 3.012-7.006 6.762v10.15c0 .931-.75 1.669-1.669 1.669s-1.669-.738-1.669-1.669v-4.288H0v4.356a7.02 7.02 0 0 0 7.025 7.019c3.85 0 7.025-3.094 7.025-6.925V11.055c0-.919.75-1.669 1.669-1.669s1.669.75 1.669 1.669z"></svg:path>`,
})
export class CibStumbleuponIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
