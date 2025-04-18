import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEsbuildIcon],svg[simple-icons-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0M6.718 5.282L13.436 12l-6.718 6.718l-2.036-2.036L9.364 12L4.682 7.318zm7.2 0L20.636 12l-6.718 6.718l-2.036-2.036L16.564 12l-4.682-4.682z"></svg:path>`,
})
export class SimpleIconsEsbuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
