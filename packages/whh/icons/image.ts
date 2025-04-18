import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhImageIcon],svg[whh-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1025V0h1024v1025zM960 64H64v769h896zm-704 64q53 0 90.5 37.5T384 256t-37.5 90.5T256 384t-90.5-37t-37.5-90v-1q0-53 37.5-90.5T256 128m111 402l238 239H128v-93l146-146q18-18 46.5-18t46.5 18m323-192q18-19 46.5-19t46.5 19l113 113v318H692q0-1-1.5-3.5T688 761L477 551z"></svg:path>`,
})
export class WhhImageIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
