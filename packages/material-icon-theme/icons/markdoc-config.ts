import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMarkdocConfigIcon],svg[material-icon-theme-markdoc-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"></svg:path><svg:path fill="#ffb300" d="M12 12v18h18V12Zm10 14h-2v-6l-2 2l-2-2v6h-2V16h2l2 2l2-2h2Zm6 2h-4V14h4Z"></svg:path>`,
})
export class MaterialIconThemeMarkdocConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
