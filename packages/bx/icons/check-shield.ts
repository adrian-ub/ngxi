import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckShieldIcon],svg[bx-check-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.995 6.9a1 1 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1 1 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a1 1 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014M12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264"></svg:path><svg:path fill="currentColor" d="m11 12.586l-2.293-2.293l-1.414 1.414L11 15.414l5.707-5.707l-1.414-1.414z"></svg:path>`,
})
export class BxCheckShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
