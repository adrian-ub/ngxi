import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber1FillIcon],svg[iconamoon-number-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.383 3.076A1 1 0 0 1 13 4v16a1 1 0 1 1-2 0V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.09-.217" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
