import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStoreComputerIcon],svg[streamline-store-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.338 8v1.969a1 1 0 0 1-1 1H2.662a1 1 0 0 1-1-1V8M6 11l-1 2.5M8 11l1 2.5m-5 0h6M.969 3.52L2.36.624h9.278l1.392 2.894H.97Zm3.961 0v.826c0 .439-.194.86-.541 1.17A1.97 1.97 0 0 1 3.079 6H2.82a1.97 1.97 0 0 1-1.309-.484a1.57 1.57 0 0 1-.542-1.17V3.52m8.128 0v.826c0 .439-.195.86-.543 1.17A1.97 1.97 0 0 1 7.245 6h-.463a1.97 1.97 0 0 1-1.309-.484a1.57 1.57 0 0 1-.542-1.17V3.52m8.1 0v.826c0 .439-.195.86-.542 1.17a1.97 1.97 0 0 1-1.31.484h-.23a1.97 1.97 0 0 1-1.31-.484a1.57 1.57 0 0 1-.542-1.17V3.52"></svg:path>`,
})
export class StreamlineStoreComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
