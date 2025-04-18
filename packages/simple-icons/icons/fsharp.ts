import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFsharpIcon],svg[simple-icons-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12L11.39.61v5.695L5.695 12l5.695 5.695v5.695zm7.322 0l4.068-4.068v8.136zM24 12L12.203.61v5.695L17.898 12l-5.695 5.695v5.695z"></svg:path>`,
})
export class SimpleIconsFsharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
