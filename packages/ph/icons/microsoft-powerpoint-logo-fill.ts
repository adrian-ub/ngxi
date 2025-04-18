import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoFillIcon],svg[ph-microsoft-powerpoint-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 24a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168M72 152v-48a8 8 0 0 1 8-8h16a24 24 0 0 1 0 48h-8v8a8 8 0 0 1-16 0m56 63.63A88.36 88.36 0 0 1 75.63 192H128ZM128 64H75.63A88.36 88.36 0 0 1 128 40.37Zm16-23.63A88.13 88.13 0 0 1 223.63 120H160V80a16 16 0 0 0-16-16Zm0 175.26V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63M96 128h-8v-16h8a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
