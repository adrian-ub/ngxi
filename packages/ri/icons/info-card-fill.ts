import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInfoCardFillIcon],svg[ri-info-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 3H7v2h2zm-2 5v3h2v-5H6v2zm6-4v2h6V9zm5 4h-5v2h5z"></svg:path>`,
})
export class RiInfoCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
