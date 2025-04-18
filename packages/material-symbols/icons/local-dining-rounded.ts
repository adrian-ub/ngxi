import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalDiningRoundedIcon],svg[material-symbols-local-dining-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.975 13.45l-6.9 6.85q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l9.55-9.55q-.45-1.05-.125-2.375T14.525 4.6q1.325-1.325 2.95-1.55t2.65.8t.8 2.65t-1.55 2.95q-1.05 1.1-2.375 1.425t-2.375-.125L13.375 12l6.9 6.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm-4.65-1l-3-3Q3.275 8.4 3 6.8t.625-2.85q.275-.375.738-.425t.787.3l5.375 5.425z"></svg:path>`,
})
export class MaterialSymbolsLocalDiningRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
