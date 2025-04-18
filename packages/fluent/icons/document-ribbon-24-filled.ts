import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentRibbon24FilledIcon],svg[fluent-document-ribbon-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2.001h6v10.001a2 2 0 0 1-2 2H9v-3.671a4.5 4.5 0 0 0-5-7.073V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM9 15.502a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-6 3.742v3.044a.71.71 0 0 0 1.212.503L5.5 21.503l1.288 1.288A.71.71 0 0 0 8 22.288v-3.044a4.5 4.5 0 0 1-2.5.758a4.5 4.5 0 0 1-2.5-.758"></svg:path>`,
})
export class FluentDocumentRibbon24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
