import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavaExceptionIcon],svg[catppuccin-java-exception-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M4 2h8L9 7h3l-6 7V9H4z"></svg:path>`,
})
export class CatppuccinJavaExceptionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
