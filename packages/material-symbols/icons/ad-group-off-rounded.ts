import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdGroupOffRoundedIcon],svg[material-symbols-ad-group-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V8.8L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275L15.2 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zm16.7-4.125L9.675 6.85q-.25-.25-.125-.55t.475-.3H20V4L8.025 3.4q-.475-.025-.588-.475t.388-.8q.075-.05.175-.088T8.2 2H20q.825 0 1.413.588T22 4v12q0 .65-.35 1.163t-.95.712"></svg:path>`,
})
export class MaterialSymbolsAdGroupOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
