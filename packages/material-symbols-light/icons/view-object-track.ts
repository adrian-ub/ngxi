import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewObjectTrackIcon],svg[material-symbols-light-view-object-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.904 19Q6.7 19 5.85 18.15T5 16.098t.85-2.054t2.054-.852h10.192q1.203 0 2.054.85t.85 2.052t-.85 2.054t-2.054.852zm-2-8.192q-1.203 0-2.053-.85Q3 9.108 3 7.906t.85-2.054T5.905 5h10.192q1.203 0 2.054.85T19 7.902t-.85 2.054t-2.054.852z"></svg:path>`,
})
export class MaterialSymbolsLightViewObjectTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
