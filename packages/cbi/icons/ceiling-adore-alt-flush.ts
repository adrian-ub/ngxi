import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingAdoreAltFlushIcon],svg[cbi-ceiling-adore-alt-flush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 6.77c-5.74 0-10.38 1.85-10.38 4.12l-.01 1.74c0 2.27 4.65 4.12 10.39 4.12s10.39-1.84 10.39-4.12v-1.74c0-2.27-4.65-4.12-10.39-4.12m0 9.04c-4.52 0-8.19-1.31-8.19-2.92s3.67-2.92 8.19-2.92s8.19 1.31 8.19 2.92s-3.67 2.92-8.19 2.92"></svg:path>`,
})
export class CbiCeilingAdoreAltFlushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
