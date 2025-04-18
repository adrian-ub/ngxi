import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siHammerAltLineIcon],svg[si-hammer-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m18.657 6.657l-1.414-1.414m-3.536 6.364l-8.061 9.475a1.6 1.6 0 0 1-2.263 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062m3.535 3.536l3.536-3.536m-9.192-2.12l3.535-3.536m-5.091.848L11.02 2.98a.8.8 0 0 1 1.131 0l8.769 8.768a.8.8 0 0 1 0 1.131l-2.405 2.405a.8.8 0 0 1-1.131 0L8.616 6.515a.8.8 0 0 1 0-1.13"></svg:path>`,
})
export class SiHammerAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
