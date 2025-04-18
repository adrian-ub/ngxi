import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsHeadphoneIcon],svg[akar-icons-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 13.565C2 11.512 4 11 6 11v9a4 4 0 0 1-4-4zm20 0C22 11.512 20 11 18 11v9a4 4 0 0 0 4-4zM6 20V10a6 6 0 1 1 12 0v10"></svg:path>`,
})
export class AkarIconsHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
