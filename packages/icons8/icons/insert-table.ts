import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8InsertTableIcon],svg[icons8-insert-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h5v5H7zm7 0h4v5h-4zm6 0h5v5h-5zM7 14h5v4H7zm7 0h4v4h-4zm6 0h5v4h-5zM7 20h5v5H7zm7 0h4v5h-4zm6 0h5v5h-5z"></svg:path>`,
})
export class Icons8InsertTableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
