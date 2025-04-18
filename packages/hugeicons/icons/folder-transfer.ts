import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderTransferIcon],svg[hugeicons-folder-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11h.625c1.756 0 2.633 0 3.264-.421a2.5 2.5 0 0 0 .69-.69C12 9.259 12 8.38 12 6.625c0-1.053 0-1.58-.253-1.958a1.5 1.5 0 0 0-.414-.414C10.955 4 10.428 4 9.375 4H7.714c-.144 0-.217 0-.283-.01a.9.9 0 0 1-.613-.377a2 2 0 0 1-.135-.246c-.262-.525-.502-1.053-1.083-1.271C5.345 2 5.054 2 4.472 2c-.908 0-1.362 0-1.703.19a1.5 1.5 0 0 0-.579.579C2 3.109 2 3.564 2 4.472V6c0 2.357 0 3.536.732 4.268S4.643 11 7 11m10 11h-.625c-1.756 0-2.633 0-3.264-.421a2.5 2.5 0 0 1-.69-.69C12 20.259 12 19.38 12 17.625c0-1.053 0-1.58.253-1.958a1.5 1.5 0 0 1 .414-.414c.378-.253.905-.253 1.958-.253h1.661c.144 0 .217 0 .283-.01a.9.9 0 0 0 .613-.377a2 2 0 0 0 .135-.246c.262-.525.502-1.053 1.083-1.272c.255-.095.546-.095 1.128-.095c.908 0 1.362 0 1.703.19c.243.136.443.336.579.579c.19.34.19.795.19 1.703V17c0 2.357 0 3.535-.732 4.268C20.535 22 19.357 22 17 22m2.336-13H22c-.5-4-3-6.5-6-7M4.664 15H2c.5 4 3 6.5 6 7" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
