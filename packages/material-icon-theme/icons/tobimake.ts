import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTobimakeIcon],svg[material-icon-theme-tobimake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"></svg:path><svg:path fill="#c2185b" d="M12 12v18h18V12Zm8 6h-2v8h-2v-8h-2v-2h6Zm8 8h-6V16h2v8h4Z"></svg:path>`,
})
export class MaterialIconThemeTobimakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
