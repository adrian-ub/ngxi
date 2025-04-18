import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsIdCardSharpIcon],svg[famicons-id-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-61.1 296.77a43 43 0 1 1-40.71-40.71a43 43 0 0 1 40.71 40.71M192 64h128v32H192Zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21Z"></svg:path>`,
})
export class FamiconsIdCardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
