import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEightIcon],svg[simple-icons-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.908 6.092a5.908 5.908 0 1 0 0 11.816a5.908 5.908 0 0 0 0-11.816m9.23 0v2.955h5.909V6.092zm5.909 2.955v5.906H24V9.047zm0 5.906h-5.908v2.955h5.908zm-5.908 0V9.047h-2.953v5.906zm-9.23-5.906A2.956 2.956 0 0 1 8.86 12a2.956 2.956 0 0 1-2.953 2.953A2.96 2.96 0 0 1 2.953 12a2.96 2.96 0 0 1 2.955-2.953z"></svg:path>`,
})
export class SimpleIconsEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
