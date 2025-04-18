import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeScrewdriverIcon],svg[material-icon-theme-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 8.185 9.815A10 10 0 0 0 20 30a10 10 0 0 0 10-10a10 10 0 0 0-8.17-9.83A10 10 0 0 0 12 2m0 4a6 6 0 0 1 5.654 4H10v7.652A6 6 0 0 1 6 12a6 6 0 0 1 6-6m2 8h4v4h-4zm8 .346A6 6 0 0 1 26 20a6 6 0 0 1-6 6a6 6 0 0 1-5.652-4H22z"></svg:path>`,
})
export class MaterialIconThemeScrewdriverIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
