import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpIcon],svg[mynaui-fat-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.483 10.895c-.43 0-.645-.545-.34-.863l7.516-6.884a.467.467 0 0 1 .682 0l7.517 6.884c.304.318.088.863-.341.863H15.68a.495.495 0 0 0-.483.506v9.093c0 .28-.216.506-.482.506H9.284a.494.494 0 0 1-.482-.506v-9.093a.495.495 0 0 0-.483-.506z"></svg:path>`,
})
export class MynauiFatArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
