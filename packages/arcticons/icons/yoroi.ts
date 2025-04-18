import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoroiIcon],svg[arcticons-yoroi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.885 20.904L42.5 7.719h-5.652l-12.852 8.756l-12.844-8.867H5.5zm3.659 2.874l11.074-7.748v4.207l-7.859 5.541zm7.645 4.985l3.318-2.437v3.993l-.659.444zm-3.882 6.867l2.993-2.104L9.271 16.03v3.985zm-4.318 2.881L9.374 26.326v3.993l14.4 10.073z"></svg:path>`,
})
export class ArcticonsYoroiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
