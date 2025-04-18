import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDropIcon],svg[proicons-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 21c-1.804 0-3.246-.566-4.397-1.446C2.38 15.557 5.832 8.09 10.801 3.522a1.767 1.767 0 0 1 2.398 0c4.97 4.568 8.42 12.035 3.198 16.032C15.246 20.434 13.804 21 12 21Z"></svg:path>`,
})
export class ProiconsDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
