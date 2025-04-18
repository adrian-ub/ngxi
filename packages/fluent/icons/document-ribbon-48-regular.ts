import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentRibbon48RegularIcon],svg[fluent-document-ribbon-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 4A4.25 4.25 0 0 0 8 8.25v13.416a9.4 9.4 0 0 1 2.5-.614V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75H19V44h16.75A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.177 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM10.5 23.066A7.5 7.5 0 0 0 4 30.5a7.5 7.5 0 0 0 7.5 7.5a7.5 7.5 0 1 0-1-14.934M7.652 45.8A1.04 1.04 0 0 1 6 44.958v-6.71A9.44 9.44 0 0 0 11.5 40c2.05 0 3.948-.65 5.5-1.754v6.71a1.04 1.04 0 0 1-1.652.842L11.5 43z"></svg:path>`,
})
export class FluentDocumentRibbon48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
