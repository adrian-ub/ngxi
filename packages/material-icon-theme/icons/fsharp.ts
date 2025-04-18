import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFsharpIcon],svg[material-icon-theme-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288D1" d="m236.249 36.066l-213.94 213.94l213.94 213.94v-84.36l-129.7-129.7l129.7-129.7z"></svg:path><svg:path fill="#0288D1" d="m236.249 156.017l-93.622 93.62l93.622 93.622z"></svg:path><svg:path fill="#00B8D4" d="m263.759 36.047l213.94 213.94l-213.94 213.94v-84.36l129.7-129.7l-129.7-129.7z"></svg:path>`,
})
export class MaterialIconThemeFsharpIcon {
  readonly viewBox = input("0 0 500 500")
  readonly width = input("1em")
  readonly height = input("1em")
}
