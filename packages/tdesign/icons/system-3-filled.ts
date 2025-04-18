import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystem3FilledIcon],svg[tdesign-system-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.077A3.926 3.926 0 0 1 11 5.923V11H5.923A3.926 3.926 0 0 1 2 7.077zm11 3.923A3.926 3.926 0 0 1 16.923 2H22v5.077A3.926 3.926 0 0 1 18.077 11H13zm-11 11A3.926 3.926 0 0 1 5.923 13H11v5.077A3.926 3.926 0 0 1 7.077 22H2zM13 13h5.077A3.926 3.926 0 0 1 22 16.923V22h-5.077A3.926 3.926 0 0 1 13 18.077z"></svg:path>`,
})
export class TdesignSystem3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
