import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsNpmIcon],svg[lineicons-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.58h-1.129v-2.225H12zm10-4.45v6.645H12v1.097H7.548v-1.13H2V8.13zM7.548 9.193H3.097v4.452h2.226v-3.29h1.129v3.355H7.58zm5.581 0H8.677v5.549h2.226v-1.13h2.226zm7.742 0h-6.645v4.452h2.226v-3.29h1.129v3.355h1.129v-3.355h1.129v3.355h1.129V9.193z"></svg:path>`,
})
export class LineiconsNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
