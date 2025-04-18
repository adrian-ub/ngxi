import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCubeIcon],svg[la-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.406l-.406.188l-10 4.5l-.594.25V22.03l.5.282l10 5.562l.5.281l.5-.281l10-5.563l.5-.28V9.343l-.594-.25l-10-4.5zm0 2.188l7.688 3.437L16 13.875l-7.688-3.844zm-9 5.031l8 4v9.656l-8-4.437zm18 0v9.219l-8 4.437v-9.656z"></svg:path>`,
})
export class LaCubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
