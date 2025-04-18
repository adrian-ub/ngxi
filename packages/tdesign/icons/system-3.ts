import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystem3Icon],svg[tdesign-system-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.077A3.926 3.926 0 0 1 11 5.923V11H5.923A3.926 3.926 0 0 1 2 7.077zm2 2v3.077C4 8.137 4.864 9 5.923 9H9V5.923C9 4.863 8.136 4 7.077 4zm12.923 0C15.863 4 15 4.864 15 5.923V9h3.077C19.137 9 20 8.136 20 7.077V4zM13 5.923A3.926 3.926 0 0 1 16.923 2H22v5.077A3.926 3.926 0 0 1 18.077 11H13zM5.923 15C4.863 15 4 15.864 4 16.923V20h3.077C8.137 20 9 19.136 9 18.077V15zM2 16.923A3.926 3.926 0 0 1 5.923 13H11v5.077A3.926 3.926 0 0 1 7.077 22H2zM13 13h5.077A3.926 3.926 0 0 1 22 16.923V22h-5.077A3.926 3.926 0 0 1 13 18.077zm2 2v3.077c0 1.06.864 1.923 1.923 1.923H20v-3.077c0-1.06-.863-1.923-1.923-1.923z"></svg:path>`,
})
export class TdesignSystem3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
