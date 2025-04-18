import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAqtisIcon],svg[token-branded-aqtis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAqtis0)" fill-rule="evenodd" d="M12.132 4.059L21 19.94H3zm-.566 2.006l3.822 4.866l-3.261-5.84zm2.753 4.326l-3.023-3.85l-.296.514l3.313 3.336zm-3.584-2.88l-.07.121l1.43 1.244zm3.017 3.478l-3.34-2.912l-.254.455l3.6 2.457zm-4.807-.36l-5.066 8.81h2.435zm-2.096 8.81h1.477l.905-7.995zm2.806-7.195l.17 6.247l-.954.667zm1.943 7.194h8.539l-.73-1.302zm7.55-1.773l-.742-1.334l-7.242 2.663zm-7.503.614l6.512-2.393l-.503-.9zm5.766-3.733l-.302-.54l-4.633 3.24zm-7.084 3.595l.656-.455l-.804-5.135zm-.17-8.99l1.293 8.207l5.294-3.706z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAqtis0" x1="12" x2="12" y1="4.059" y2="19.941" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BDDC78"></svg:stop><svg:stop offset="1" stop-color="#5AD9E6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAqtisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
