import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimStoreSlashIcon],svg[uim-store-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18.586v-7.143a3.95 3.95 0 0 1-5-.8a3.96 3.96 0 0 1-1.789 1.154Z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M22 23a1 1 0 0 1-.707-.293l-20-20a1 1 0 0 1 1.414-1.414l20 20A1 1 0 0 1 22 23"></svg:path><svg:path fill="currentColor" d="M12.586 14H10a1 1 0 0 0-1 1v7h6v-5.586Z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M10 14h2.586l-2.49-2.49A3.8 3.8 0 0 1 9 10.642a4 4 0 0 1-5 .82V21a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1m5 2.414V22h4a.99.99 0 0 0 .93-.655z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M13.211 11.797A3.96 3.96 0 0 0 15 10.643A3.998 3.998 0 0 0 22 8a1 1 0 0 0-.071-.371l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.929.629l-.008.02zM3.255 4.669L2.071 7.63A1 1 0 0 0 2 8a3.998 3.998 0 0 0 7 2.643a3.8 3.8 0 0 0 1.095.866z" opacity=".5"></svg:path>`,
})
export class UimStoreSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
