import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyRightDirectionIcon],svg[hugeicons-curvy-right-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.003 15s1.999-1.473 1.999-2s-2-2-2-2m1.775 1.867c-1.412.29-4.058.403-5.368-2.05c-.543-.864-.441-2.31-.441-3.956c-.034-.67-.606-1.891-2.038-1.86s-1.902 1.206-1.958 1.79v10.111c.014.852-.48 2.097-1.996 2.097c-1.48 0-2.06-1.312-1.932-2.295c.346-2.664-.463-5.457-3.963-5.701H1.997" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyRightDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
