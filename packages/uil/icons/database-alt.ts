import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDatabaseAltIcon],svg[uil-database-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8-9H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2.56A3.9 3.9 0 0 0 8 16h8a3.9 3.9 0 0 0 2-.56Zm0-6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9.44A3.9 3.9 0 0 0 8 10h8a3.9 3.9 0 0 0 2-.56Zm-2-4H8a2 2 0 0 1 0-4h8a2 2 0 0 1 0 4"></svg:path>`,
})
export class UilDatabaseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
