import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusFountainPenIcon],svg[material-symbols-light-stylus-fountain-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.214 15.135h7.553l1.925-7.885L12.5 2.464v5.202q.312.153.512.442t.2.661q0 .495-.359.853q-.359.359-.853.359q-.513 0-.872-.359q-.359-.358-.359-.853q0-.373.2-.671t.531-.433v-5.2L6.289 7.25zM5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusFountainPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
