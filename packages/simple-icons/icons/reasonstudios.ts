import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsReasonstudiosIcon],svg[simple-icons-reasonstudios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.49 5.114l8.3-4.79a2.42 2.42 0 0 1 2.39-.017l.03.017l8.299 4.79a2.42 2.42 0 0 1 1.211 2.065v9.611a2.42 2.42 0 0 1-1.184 2.08l-.027.016l-8.299 4.79a2.42 2.42 0 0 1-2.39.017l-.03-.017l-8.3-4.79a2.42 2.42 0 0 1-1.21-2.065V7.21c0-.855.45-1.645 1.184-2.08zl8.3-4.79zM12 4.026L5.092 8.013v7.974L12 19.974V12l6.908-3.987z"></svg:path>`,
})
export class SimpleIconsReasonstudiosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
