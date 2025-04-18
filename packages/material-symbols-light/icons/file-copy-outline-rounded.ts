import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOutlineRoundedIcon],svg[material-symbols-light-file-copy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.385 18h-9.77q-.69 0-1.152-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2h6.213q.323 0 .628.13t.522.349L19.52 6.02q.218.218.348.522t.131.628v9.214q0 .69-.462 1.153T18.384 18M19 7h-3.077q-.394 0-.659-.264Q15 6.47 15 6.077V3H8.616q-.231 0-.424.192T8 3.616v12.769q0 .23.192.423t.423.192h9.77q.23 0 .423-.192t.192-.424zM4.616 22q-.691 0-1.153-.462T3 20.385V8.5q0-.213.143-.357T3.5 8t.357.143T4 8.5v11.885q0 .23.192.423t.423.192H13.5q.214 0 .357.143T14 21.5t-.143.357T13.5 22zM8 3v4zv14z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
