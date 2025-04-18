import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDirectionsWalkIcon],svg[material-symbols-directions-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23L9.8 8.9L8 9.6V13H6V8.3l5.05-2.15q.35-.15.738-.175t.737.1t.663.35T13.7 7l1 1.6q.65 1.05 1.763 1.725T19 11v2q-1.75 0-3.125-.725t-2.35-1.85L12.9 13.5l2.1 2V23h-2v-6.5l-2.1-1.6L9.1 23zm6.5-17.5q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5"></svg:path>`,
})
export class MaterialSymbolsDirectionsWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
