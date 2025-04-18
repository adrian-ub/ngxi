import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook5OutlineIcon],svg[material-symbols-light-book-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.98 21q-.816 0-1.398-.541Q5 19.917 5 19.119V5.766q0-.778.53-1.364t1.306-.748l8.78-1.854v14.616l-8.86 1.919q-.302.069-.529.276q-.227.206-.227.508q0 .39.292.636t.689.245H18V5h1v16zm1.405-4.017l6.23-1.36V3.039l-6.23 1.32zm-1 .207V4.568l-.433.095q-.41.088-.68.391Q6 5.356 6 5.766v11.867q.183-.108.368-.184t.388-.12zM6 4.776v12.858z"></svg:path>`,
})
export class MaterialSymbolsLightBook5OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
