import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavaEnumIcon],svg[catppuccin-java-enum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M9.625 1.5H14.5v4.875H9.625ZM1.5 9.625h4.875V14.5H1.5Zm8.125 2.438a2.438 2.437 0 1 0 4.875 0a2.438 2.437 0 1 0-4.875 0M1.5 3.938a2.438 2.437 0 1 0 4.875 0a2.438 2.437 0 1 0-4.875 0"></svg:path>`,
})
export class CatppuccinJavaEnumIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
