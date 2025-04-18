import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAwsAppflowIcon],svg[logos-aws-appflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAwsAppflow0" x1="0%" x2="100%" y1="100%" y2="0%"><svg:stop offset="0%" stop-color="#B0084D"></svg:stop><svg:stop offset="100%" stop-color="#FF4F8B"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosAwsAppflow0)" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="m133.302 60.8l-50.22 84.438l-3.322-12.39l-6.18 1.658l6.254 23.34l23.34-6.256l-1.654-6.179l-13.2 3.533l48.62-81.74h48.049l24.019 41.596l-24.02 41.6h-25.106v6.403h28.8l27.715-48.003l-27.715-48zm15.63 43.61l1.657 6.182l13.353-3.58l-46.134 81.791h-48L45.788 147.2l24.02-41.6h19.677v-6.397h-23.37L38.4 147.2l27.715 48h55.43l47.533-84.26l3.27 12.212l6.183-1.658l-6.256-23.337z"></svg:path>`,
})
export class LogosAwsAppflowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
