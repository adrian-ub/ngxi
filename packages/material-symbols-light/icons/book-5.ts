import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook5Icon],svg[material-symbols-light-book-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.98 21q-.816 0-1.398-.541Q5 19.917 5 19.119V5.766q0-.778.53-1.364t1.306-.748l8.78-1.854v14.616l-8.86 1.919q-.302.069-.529.276q-.227.206-.227.508q0 .39.292.636t.689.245H18V5h1v16zm.405-3.81l1-.207V4.36l-1 .207z"></svg:path>`,
})
export class MaterialSymbolsLightBook5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
