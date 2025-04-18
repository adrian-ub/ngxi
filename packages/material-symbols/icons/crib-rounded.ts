import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCribRoundedIcon],svg[material-symbols-crib-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.725 0-3.312-.575T5.75 19.8q-.35-.275-.375-.712t.275-.738t.713-.3t.762.275q.2.175.425.325t.45.275V16H6q-.825 0-1.412-.587T4 14V8q0-1.65 1.175-2.825T8 4h3q.425 0 .713.288T12 5v4h6q.825 0 1.413.588T20 11v3q0 .825-.587 1.413T18 16h-2v2.925q.25-.15.475-.3t.45-.325q.325-.275.75-.25t.7.3q.3.3.275.713t-.35.687q-1.35 1.075-2.963 1.663T12 22m0-2q.5 0 1-.062t1-.188V16h-4v3.75q.5.125 1 .188T12 20"></svg:path>`,
})
export class MaterialSymbolsCribRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
