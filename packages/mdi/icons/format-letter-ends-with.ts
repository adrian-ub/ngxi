import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterEndsWithIcon],svg[mdi-format-letter-ends-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M20 14v4H2v2h20v-6Z"></svg:path>`,
})
export class MdiFormatLetterEndsWithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
