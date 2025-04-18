import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMenstrualHealthOutlineIcon],svg[material-symbols-menstrual-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.875q1.225 1.475 2.2 2.738t1.75 2.412L22 2.5V12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12V2.5l6.05 4.525q.775-1.125 1.75-2.4t2.2-2.75M4 6.5V12q0 1.1.288 2.113T5.075 16q-.05-.25-.062-.488T5 15q0-1.425.463-2.937T6.975 8.75zM12 5q-2.75 3.35-3.875 5.85T7 15q0 2.075 1.463 3.538T12 20t3.538-1.463T17 15q0-1.65-1.125-4.175T12 5m8 1.5l-2.975 2.225q1.05 1.8 1.513 3.313T19 15q0 .275-.012.513t-.063.487q.5-.875.788-1.888T20 12z"></svg:path>`,
})
export class MaterialSymbolsMenstrualHealthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
