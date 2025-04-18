import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsShirt1Icon],svg[lineicons-shirt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.839 2.545A2.25 2.25 0 0 1 7.307 2h1.735a.75.75 0 0 1 .74.626a2.25 2.25 0 0 0 4.437 0a.75.75 0 0 1 .74-.626h1.734c.54 0 1.06.193 1.468.545l4.078 3.512a.75.75 0 0 1 .17.927l-1.875 3.438a.75.75 0 0 1-1.029.293l-.755-.428v9.463A2.25 2.25 0 0 1 16.5 22h-9a2.25 2.25 0 0 1-2.25-2.25v-9.463l-.755.428a.75.75 0 0 1-1.028-.293L1.592 6.984a.75.75 0 0 1 .169-.927zm1.468.955a.75.75 0 0 0-.49.182L3.2 6.798l1.22 2.236l1.211-.687A.75.75 0 0 1 6.75 9v10.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V9a.75.75 0 0 1 1.12-.653l1.212.687l1.22-2.236l-3.62-3.116a.75.75 0 0 0-.489-.182h-1.157a3.75 3.75 0 0 1-7.072 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShirt1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
