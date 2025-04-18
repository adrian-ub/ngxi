import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusFountainPenOutlineIcon],svg[material-symbols-light-stylus-fountain-pen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.214 15.135L6.289 7.25L12 2l5.692 5.25l-1.925 7.885zm.786-1h5.98l1.603-6.537L12.5 3.823v3.843q.312.153.512.442t.2.661q0 .494-.359.853T12 9.981q-.513 0-.872-.359t-.359-.853q0-.373.2-.671t.531-.433V3.823L7.417 7.598zM5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusFountainPenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
