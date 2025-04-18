import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTuneVerticalIcon],svg[mdi-tune-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H5v6h2zm12 0h-2v10h2zM3 13h2v8h2v-8h2v-2H3zm12-6h-2V3h-2v4H9v2h6zm-4 14h2V11h-2zm4-6v2h2v4h2v-4h2v-2z"></svg:path>`,
})
export class MdiTuneVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
