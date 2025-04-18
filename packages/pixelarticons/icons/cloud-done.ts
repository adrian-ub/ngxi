import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudDoneIcon],svg[pixelarticons-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2zm0 2v2h2v4h4v6H2v-6h2v-2h4V8h2V6zm-6 6H8v2h2v2h2v-2h2v-2h2v-2h-2v2h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsCloudDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
