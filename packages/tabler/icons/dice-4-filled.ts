import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDice4FilledIcon],svg[tabler-dice-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TablerDice4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
