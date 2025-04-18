import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDatabaseIcon],svg[mynaui-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 3C7.582 3 4 4.29 4 5.88c0 4.16 16 4.16 16 0C20 4.29 16.418 3 12 3m8 8.75c0 4.667-16 4.667-16 0"></svg:path><svg:path d="M4 6v12.165c0 3.78 16 3.78 16 0V6"></svg:path></svg:g>`,
})
export class MynauiDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
