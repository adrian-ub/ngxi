import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInstructureIcon],svg[simple-icons-instructure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.996 0l-5.11 2.878L12 5.76l5.115-2.878ZM6.032 3.36L.918 6.237L6.036 9.12l5.115-2.879Zm11.929 0l-5.112 2.878l5.115 2.882l5.118-2.879zM12 11.52L.918 17.76L12 24l11.082-6.241Z"></svg:path>`,
})
export class SimpleIconsInstructureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
