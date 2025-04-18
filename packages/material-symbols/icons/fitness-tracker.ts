import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitnessTrackerIcon],svg[material-symbols-fitness-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 22l-1.2-3.975q-.375-.4-.587-.925T7 16V8q0-.6.213-1.125T7.8 5.95L9 2h6l1.15 3.925q.4.425.625.95T17 8v8q0 .6-.213 1.125t-.612.95L15 22zm1-5h4q.425 0 .713-.288T15 16V8q0-.425-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17"></svg:path>`,
})
export class MaterialSymbolsFitnessTrackerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
