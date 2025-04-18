import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBuildingFilledIcon],svg[lsicon-building-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h7v5h5v7H2zm3 3.5H4v-1h1zm2 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zM8 9v4h1v-3h2v3h1V9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBuildingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
