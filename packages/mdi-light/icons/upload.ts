import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightUploadIcon],svg[mdi-light-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.16V5.91l5.25 5.25l.75-.66L11.5 4L5 10.5l.75.66L11 5.91v12.25zM3 19h1v2h15v-2h1v3H3z"></svg:path>`,
})
export class MdiLightUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
