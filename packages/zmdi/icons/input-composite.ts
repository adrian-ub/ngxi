import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiInputCompositeIcon],svg[zmdi-input-composite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 27v85h43v128H0V112h43V27q0-9 6-15.5T64 5t15 6.5T85 27m86 298v-42h128v42q0 21-12 37.5T256 385v90h-43v-90q-19-6-30.5-22.5T171 325M0 325v-42h128v42q0 21-12 37.5T85 385v90H43v-90q-19-6-31-22.5T0 325m427-213h42v128H341V112h43V27q0-9 6.5-15.5t15-6.5t15 6.5T427 27zM256 27v85h43v128H171V112h42V27q0-9 6.5-15.5t15-6.5t15 6.5T256 27m85 298v-42h128v42q0 21-11.5 37.5T427 385v90h-43v-90q-19-6-31-22.5T341 325"></svg:path>`,
})
export class ZmdiInputCompositeIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
