import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVonageIcon],svg[simple-icons-vonage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.279 11.617l-4.54-10.07H0l6.797 15.296a.084.084 0 0 0 .153 0zm9.898-10.07s-6.148 13.868-6.917 15.565c-1.838 4.056-3.2 5.07-4.588 5.289a.026.026 0 0 0 .004.052h4.34c1.911 0 3.219-1.285 5.06-5.341C17.72 15.694 24 1.547 24 1.547z"></svg:path>`,
})
export class SimpleIconsVonageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
