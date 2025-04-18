import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWorksoftIcon],svg[arcticons-worksoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.659 4.5a9.243 9.243 0 1 0 9.271 9.245v-.002A9.257 9.257 0 0 0 28.66 4.5ZM14.742 24.427a4.665 4.665 0 0 0-4.672 4.658v0a4.672 4.672 0 1 0 4.673-4.658Zm16.002 9.317a4.886 4.886 0 0 0-4.893 4.878v0a4.886 4.886 0 0 0 4.893 4.878h0a4.885 4.885 0 0 0 4.893-4.878v0a4.886 4.886 0 0 0-4.893-4.878m-16.01.005"></svg:path>`,
})
export class ArcticonsWorksoftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
