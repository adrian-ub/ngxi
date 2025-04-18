import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewHeadlineIcon],svg[material-symbols-light-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 14.385v-1h15v1zm0 3.769v-1h15v1zm0-7.538v-1h15v1zm0-3.77v-1h15v1z"></svg:path>`,
})
export class MaterialSymbolsLightViewHeadlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
