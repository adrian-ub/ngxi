import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKirbyIcon],svg[simple-icons-kirby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.571 12l-2.857 1.48v.234h2.857V16H7.43v-2.286h2.857v-.25L7.429 12V9.143L12 11.598l4.571-2.455M12 0l10.286 5.999V18L12 24L1.714 18.001V6zM2.857 6.682v10.636L12 22.651l9.143-5.333V6.682L12 1.349Z"></svg:path>`,
})
export class SimpleIconsKirbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
