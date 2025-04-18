import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTextFormatIcon],svg[zmdi-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h299v42H0zm96-90l-19 47H32L133 21h32l102 235h-45l-19-47zm53-145l-40 107h80z"></svg:path>`,
})
export class ZmdiTextFormatIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
