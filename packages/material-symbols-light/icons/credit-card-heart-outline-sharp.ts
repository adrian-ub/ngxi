import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditCardHeartOutlineSharpIcon],svg[material-symbols-light-credit-card-heart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-7.692v.479V6zm13.535 1.885l-2.962-2.962q-.287-.287-.395-.594q-.109-.308-.109-.625q0-.685.479-1.214t1.244-.529q.604 0 .946.277t.796.731q.443-.442.788-.725t.955-.283q.79 0 1.257.532T21 15.71q0 .317-.121.634t-.383.579zM4 8.808h16V6H4zM11.267 19H3V5h18v6.287q-.76-.472-1.634-.726q-.874-.253-1.831-.253q-.868 0-1.669.23q-.8.23-1.481.654H4V18h7.014q.055.275.109.516q.054.24.144.484"></svg:path>`,
})
export class MaterialSymbolsLightCreditCardHeartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
