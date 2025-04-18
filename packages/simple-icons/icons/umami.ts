import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsUmamiIcon],svg[simple-icons-umami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.203 8.611H.857a.845.845 0 0 0-.841.841v.858a13 13 0 0 0-.016.6c0 6.627 5.373 12 12 12c6.527 0 11.837-5.212 11.996-11.701c0-.025.004-.05.004-.075V9.452a.845.845 0 0 0-.841-.841h-1.346c-1.159-4.329-5.112-7.521-9.805-7.521S3.363 4.282 2.203 8.611m18.444 0H3.37c1.127-3.702 4.57-6.399 8.638-6.399c4.069 0 7.512 2.697 8.639 6.399"></svg:path>`,
})
export class SimpleIconsUmamiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
