import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoMobileIcon],svg[arcticons-go-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.981 45h8.038l4.019-6.961l-4.019-6.961h-8.038l-4.019 6.961z"></svg:path><svg:path d="M32.038 38.039h8.037l4.019-6.961l-4.019-6.96h-8.037l-4.019 6.96zm0-14.157h8.037l4.019-6.96l-4.019-6.961h-8.037l-4.019 6.961z"></svg:path><svg:path d="M19.981 16.922h8.038l4.019-6.961L28.019 3h-8.038l-4.019 6.961z"></svg:path><svg:path d="M7.925 23.882h8.037l4.019-6.96l-4.019-6.961H7.925l-4.019 6.961zm0 14.157h8.037l4.019-6.961l-4.019-6.96H7.925l-4.019 6.96z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.925 24.118l4.019 6.96m8.037 0h-8.037m-4.019 6.961l4.019-6.961m8.037 0L24 38.039m8.038 0H24M19.981 45L24 38.039m8.262-13.921l4.019 6.96m8.037 0h-8.037m-4.019 6.961l4.019-6.961M32.038 9.961l4.018 6.961m8.038 0h-8.038m-4.018 6.96l4.018-6.96M19.981 3L24 9.961m8.038 0H24m-4.019 6.961L24 9.961m-16.075 0l4.019 6.961m8.037 0h-8.037m-4.019 6.96l4.019-6.96"></svg:path>`,
})
export class ArcticonsGoMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
