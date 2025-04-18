import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopWindowsRoundedIcon],svg[material-symbols-light-laptop-windows-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 18.77q-.213 0-.356-.145T1 18.268t.144-.356t.356-.143h3.116V17q-.691 0-1.153-.462T3 15.385v-8.77q0-.69.463-1.152T4.615 5h14.77q.69 0 1.152.463T21 6.615v8.77q0 .69-.463 1.153T19.385 17v.77H22.5q.213 0 .356.143q.144.144.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightLaptopWindowsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
