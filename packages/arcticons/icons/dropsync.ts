import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDropsyncIcon],svg[arcticons-dropsync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.058 36.693l10.97-6.328v-12.66l-10.97 6.327zM13.016 30.32l11.042 6.373V24.032l-11.042-6.373z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.016 17.659l11.042 6.373l10.97-6.327l-11.042-6.373z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.218 34.197L24.058 44.5l17.724-10.229V13.803L23.942 3.5L6.218 13.729z"></svg:path>`,
})
export class ArcticonsDropsyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
