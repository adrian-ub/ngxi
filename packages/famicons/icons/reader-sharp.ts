import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsReaderSharpIcon],svg[famicons-reader-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12m192 260H160v-32h112Zm80-80H160v-32h192Zm0-80H160v-32h192Z"></svg:path>`,
})
export class FamiconsReaderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
