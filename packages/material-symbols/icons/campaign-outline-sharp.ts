import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCampaignOutlineSharpIcon],svg[material-symbols-campaign-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6l3.2 2.4zm-2-12L16 6.4L19.2 4l1.2 1.6zM5 19v-4H2V9h6l5-3v12l-5-3H7v4zm6-4.55v-4.9L8.55 11H4v2h4.55zm3 .9v-6.7q.675.6 1.088 1.463T15.5 12t-.413 1.888T14 15.35M7.5 12"></svg:path>`,
})
export class MaterialSymbolsCampaignOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
