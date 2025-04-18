import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPrefectIcon],svg[simple-icons-prefect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.003L4.288 4.002L12 0l7.713 4v8.004L12 16v8l-7.71-4v-8L12 16z"></svg:path>`,
})
export class SimpleIconsPrefectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
