import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsZoteroIcon],svg[academicons-zotero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.264 64h276.752v54.624L79.072 401.392h228.944V448H11.984v-53.424l229.76-283.968H31.264Z"></svg:path>`,
})
export class AcademiconsZoteroIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
