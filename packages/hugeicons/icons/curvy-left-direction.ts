import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyLeftDirectionIcon],svg[hugeicons-curvy-left-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.997 15s-1.999-1.473-1.999-2s2-2 2-2m-1.775 1.867c1.412.29 4.058.403 5.368-2.05c.543-.864.442-2.31.442-3.956c.033-.67.605-1.891 2.037-1.86s1.902 1.206 1.958 1.79v10.111c-.014.852.48 2.097 1.996 2.097c1.48 0 2.06-1.312 1.932-2.295c-.346-2.664.463-5.457 3.963-5.701h2.084" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyLeftDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
