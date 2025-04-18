import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplemindLiteIcon],svg[arcticons-simplemind-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5V24A18.5 18.5 0 0 0 24 42.5A18.5 18.5 0 0 0 42.5 24A18.5 18.5 0 0 0 24 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.083 12.083V24A11.917 11.917 0 0 0 24 35.917A11.917 11.917 0 0 0 35.917 24A11.917 11.917 0 0 0 24 12.083z"></svg:path>`,
})
export class ArcticonsSimplemindLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
