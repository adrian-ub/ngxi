import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShieldMoonOutlineRoundedIcon],svg[material-symbols-shield-moon-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.525 16q.95 0 1.863-.4t1.587-1.2q.175-.2.075-.45t-.35-.3q-.95-.15-1.8-.713t-1.375-1.487q-.5-.875-.587-1.887T12.2 7.6q.1-.25-.062-.45T11.7 7q-1.725.325-2.725 1.625t-1 2.875q0 1.875 1.338 3.188T12.525 16M12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"></svg:path>`,
})
export class MaterialSymbolsShieldMoonOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
