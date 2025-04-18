import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArchiveSharpIcon],svg[ion-archive-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="12" ry="12"></svg:rect><svg:path fill="currentColor" d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160Zm192 230.63L169.32 304L192 281.32l48 48.05V208h32v121.37l48.07-48.07l22.61 22.64Z"></svg:path>`,
})
export class IonArchiveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
