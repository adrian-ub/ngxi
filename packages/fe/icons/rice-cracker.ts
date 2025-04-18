import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feRiceCrackerIcon],svg[fe-rice-cracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-5-3.755V13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.245a8 8 0 1 0-10 0"></svg:path>`,
})
export class FeRiceCrackerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
