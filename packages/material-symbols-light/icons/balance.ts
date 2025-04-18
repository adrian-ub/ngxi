import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBalanceIcon],svg[material-symbols-light-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h8.5V7.94q-.708-.129-1.25-.642T9.56 6H6.116L9 13.212q-.058 1-.929 1.702T6 15.616t-2.071-.702T3 13.212L5.885 6H4V5h5.56q.165-.836.834-1.418T12 3t1.606.582T14.44 5H20v1h-1.884L21 13.212q-.058 1-.929 1.702T18 15.616t-2.071-.702T15 13.212L17.884 6h-3.443q-.149.785-.691 1.298t-1.25.643V19H21v1zm12.99-6.884h4.02L18 8.092zm-12 0h4.02L6 8.092zM12 7q.617 0 1.059-.441q.441-.442.441-1.059t-.441-1.059Q12.617 4 12 4t-1.059.441T10.5 5.5t.441 1.059Q11.383 7 12 7"></svg:path>`,
})
export class MaterialSymbolsLightBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
