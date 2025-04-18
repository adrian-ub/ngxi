import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingDevereIcon],svg[cbi-ceiling-devere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.1 5.8c-5.9 0-10.6 2-10.6 4.6v4.1c0 2.6 4.7 4.6 10.6 4.6s10.6-2 10.6-4.6v-4c0-2.7-4.7-4.7-10.6-4.7m0 12.3c-5.7 0-9.6-1.9-9.6-3.6s3.9-3.6 9.6-3.6s9.6 1.9 9.6 3.6c0 1.6-4 3.6-9.6 3.6"></svg:path>`,
})
export class CbiCeilingDevereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
