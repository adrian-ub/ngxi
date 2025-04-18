import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsCienciaVitaeIcon],svg[academicons-ciencia-vitae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M129.058 134.923L8 256l121.058 121.077l38.084-39.056L86.112 256l82.002-82.021Zm252.892 9.764a36.127 36.127 0 0 0-36.12 36.119a36.127 36.127 0 0 0 36.12 36.138a36.127 36.127 0 0 0 36.138-36.138a36.127 36.127 0 0 0-36.138-36.12m-81.03 62.493l-38.083 39.056l120.085 121.077L504 246.236l-39.056-39.056l-82.022 82.021Zm-106.432 11.71a36.127 36.127 0 0 0-36.138 36.137a36.127 36.127 0 0 0 36.138 36.12a36.127 36.127 0 0 0 36.12-36.12a36.127 36.127 0 0 0-36.12-36.138"></svg:path>`,
})
export class AcademiconsCienciaVitaeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
