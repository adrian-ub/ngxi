import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicIcon],svg[mdi-bottle-tonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5"></svg:path>`,
})
export class MdiBottleTonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
