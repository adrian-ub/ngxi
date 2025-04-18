import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLightningSlashSolidIcon],svg[mynaui-lightning-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.493 3.659a1.25 1.25 0 0 0-.711-1.296a1.195 1.195 0 0 0-1.46.36L3.518 12.736a1.28 1.28 0 0 0-.16 1.302c.172.393.57.741 1.116.741H8.16l-5.69 5.69a.75.75 0 1 0 1.06 1.061l6.752-6.751h.875l-.65 5.562a1.25 1.25 0 0 0 .711 1.296a1.195 1.195 0 0 0 1.46-.36l7.803-10.013a1.28 1.28 0 0 0 .16-1.302a1.22 1.22 0 0 0-1.116-.741H15.84l5.69-5.69a.75.75 0 0 0-1.06-1.061l-6.752 6.75h-.875z"></svg:path>`,
})
export class MynauiLightningSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
