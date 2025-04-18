import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSportSoccer24FilledIcon],svg[fluent-sport-soccer-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.244 4.373l3.008 1.8v2.193l-2.791 2.028l-2.044-.707l-.587-3.534a8.5 8.5 0 0 1 2.414-1.78m-4.623 9.066l2.327-2.327l2.04.705L9.07 15.15l-.97 1.575l-3.293-.194a8.5 8.5 0 0 1-1.186-3.092m6.909 6.934l-1.184-2.809l.963-1.567h3.372l.912 1.581l-1.04 2.78a8.6 8.6 0 0 1-3.023.015m8.362-3.397l-3.024-.19l-.938-1.624l1.087-3.345l2.013-.696l2.312 2.52a8.5 8.5 0 0 1-1.45 3.335m-.72-10.82l-.589 3.533l-2.04.705l-2.791-2.028V6.172l3.002-1.8a8.5 8.5 0 0 1 2.418 1.784"></svg:path>`,
})
export class FluentSportSoccer24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
