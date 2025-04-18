import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSpinnerFillIcon],svg[si-spinner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 0 0-2 0v4.167a1 1 0 1 0 2 0zm0 15.833a1 1 0 0 0-2 0V22a1 1 0 1 0 2 0zM16.834 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-4.166a1 1 0 0 1-1-1M2 11a1 1 0 0 0 0 2h4.167a1 1 0 1 0 0-2zm17.916-6.915a1 1 0 0 1 0 1.414l-2.917 2.917A1 1 0 1 1 15.585 7l2.917-2.916a1 1 0 0 1 1.414 0M8.415 16.999a1 1 0 0 0-1.414-1.414L4.084 18.5A1 1 0 1 0 5.5 19.916zm7.17-1.414a1 1 0 0 1 1.414 0l2.917 2.916a1 1 0 1 1-1.414 1.415l-2.917-2.917a1 1 0 0 1 0-1.414M5.499 4.085a1 1 0 0 0-1.415 1.414l2.917 2.917A1 1 0 0 0 8.415 7z"></svg:path>`,
})
export class SiSpinnerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
