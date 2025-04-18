import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldCrownOutlineIcon],svg[mdi-shield-crown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9 4v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5zm0 2.18L5 6.3v4.92C5 15.54 8.25 20 12 21c3.75-1 7-5.46 7-9.78V6.3zM16 14v1.59c-.04.22-.22.37-.47.41H8.47c-.25-.04-.43-.19-.47-.41V14zm1-6l-1 5H8L7 8l2.67 2.67L12 8.34l2.33 2.33z"></svg:path>`,
})
export class MdiShieldCrownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
