import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightVolumeIcon],svg[mdi-light-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.5a7.5 7.5 0 0 1-7 7.484V18.98a6.5 6.5 0 0 0 0-12.96V5.016a7.5 7.5 0 0 1 7 7.484Zm-3 0a4.5 4.5 0 0 1-4 4.473v-1.008a3.501 3.501 0 0 0 0-6.93V8.027a4.5 4.5 0 0 1 4 4.473Zm-3 0a1.5 1.5 0 0 1-1 1.415v-2.83a1.5 1.5 0 0 1 1 1.415ZM2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Z"></svg:path>`,
})
export class MdiLightVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
